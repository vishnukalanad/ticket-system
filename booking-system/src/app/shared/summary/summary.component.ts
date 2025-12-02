import {ChangeDetectionStrategy, Component, Input, input} from '@angular/core';
import {SeatsModel} from "../../core/interfaces/seatsModel";
import {CommonModule} from "@angular/common";
import {CurrencyPipe} from "../../core/pipes/currency.pipe";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  seats = input.required<SeatsModel[]>();

  constructor() {
  }

  get selectedSeats(): SeatsModel[] {
    return this.seats().filter(s => s.selected);
  }

  get totalPrice(): number {
    return this.selectedSeats.reduce((a, b) => a + b.price, 0)
  }
}
