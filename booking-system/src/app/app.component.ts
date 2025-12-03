import {Component, Inject, InjectionToken, OnInit, ViewEncapsulation} from '@angular/core';
import {AsyncPipe, CommonModule, DatePipe} from "@angular/common";
import {IMovieService} from "./core/interfaces/movieModel";
import {MoviesService} from "./core/services/movies.service";
import {Store} from "@ngrx/store";
import {addMovies, addSeats, toggleSeat} from "./core/state/actions";
import {StateModel} from "./core/interfaces/stateModel";
import {Observable, take} from "rxjs";
import {SeatComponent} from "./shared/seat/seat.component";
import {ISeatsService, LegendModel, SeatsModel} from "./core/interfaces/seatsModel";
import {SeatService} from "./core/services/seat.service";
import {LegendComponent} from "./shared/legend/legend.component";
import {SummaryComponent} from "./shared/summary/summary.component";

const movieService = new InjectionToken<IMovieService>('MOVIE_SERVICE');
const seatService = new InjectionToken<ISeatsService>("SEAT_SERVICE")

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, AsyncPipe, CommonModule, SeatComponent, LegendComponent, SummaryComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{provide: movieService, useClass: MoviesService}, {provide: seatService, useClass: SeatService}],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'booking-system';

  state$: Observable<StateModel | null>;

  // Creates an array of length 8 (row size) and map to alphabets;
  rows = Array.from({length: 8}, (_, i) => {
    return String.fromCharCode(97 + i).toUpperCase();
  });

  // Legends data;
  legends: LegendModel[] = [
    {label: 'Available', color: 'available'},
    {label: 'Selected', color: 'selected'},
    {label: 'Occupied', color: 'disabled'},
    {label: 'Premium', color: 'premium'},
  ]

  // seats: SeatsModel[]

  constructor(@Inject(movieService) private movieService: IMovieService, @Inject(seatService) private seatService: ISeatsService, private store: Store<{
    state: StateModel
  }>) {
    this.state$ = this.store.select(state => state.state);
  }

  ngOnInit(): void {
    // Loads the movie details;
    this.getMovie();
    const seats = this.seatService.generateSeats();
    this.store.dispatch(addSeats({
      seats
    }))
  }

  /**
   * Retrieves movie data using the movie service and assigns it to the movieData property.
   * @return {void}
   */
  getMovie() {
    this.movieService.getMovie().pipe(take(1)).subscribe(movie => {
      this.store.dispatch(addMovies({
        movie
      }))
    });
  }

  /**
   * Handles the selection of a seat;
   *
   * @param {SeatsModel} seat - seat object containing information about the selected seat.
   * @return - no return value
   */
  onSelect(seat: SeatsModel) {
    // console.log(seat);
    this.store.dispatch(toggleSeat({seat: seat.seatId}));
    // this.state$.subscribe(state => console.log(state));
  }
}
