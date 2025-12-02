import {createAction, props} from "@ngrx/store";
import {MovieModel} from "../interfaces/movieModel";
import {SeatsModel} from "../interfaces/seatsModel";

export const addMovies = createAction('[Movies] Add Movies', props<{movie: MovieModel}>());
export const addSeats = createAction('[Seats] Add Seats', props<{seats: SeatsModel[]}>());
export const toggleSeat = createAction('[Seats] Toggle Seat', props<{seat: number}>());
