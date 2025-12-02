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
  seat = input.required<SeatsModel>();
  selected = output<SeatsModel>();

  constructor() { }

  onSelect(seat: SeatsModel) {
    this.selected.emit(seat);
  }

  isSelected(seat: SeatsModel) {
    return seat.selected;
  }
}
