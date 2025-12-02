import {Component, input, output} from '@angular/core';
import {SeatsModel} from "../../core/interfaces/seatsModel";

@Component({
  selector: 'app-seat',
  standalone: true,
  imports: [],
  templateUrl: './seat.component.html',
  styleUrl: './seat.component.css'
})
export class SeatComponent {
  // Seat details input signal;
  seat = input.required<SeatsModel>();
  // Event emitter signal for seat selection;
  selected = output<SeatsModel>();

  constructor() { }

  /**
   *  Emits seat details on seat selection
   * @param seat
   */
  onSelect(seat: SeatsModel) {
    this.selected.emit(seat);
  }

  /**
   * Check the visibility of seat;
   * @param seat
   * @return boolean
   */
  isSelected(seat: SeatsModel) {
    return seat.selected;
  }
}
