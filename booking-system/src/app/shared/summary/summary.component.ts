import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {SeatsModel} from "../../core/interfaces/seatsModel";
import {CommonModule} from "@angular/common";
import {CurrencyPipe} from "../../core/pipes/currency.pipe";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {
  seats = input.required<SeatsModel[]>();

  selectedSeats: SeatsModel[] = [];
  totalPrice = 0;

  constructor() { }

  ngOnChanges() {
    this.getSelectedSeats()
  }

  getSelectedSeats() {
    this.selectedSeats = this.seats().filter(s => s.selected);
    this.totalPrice = this.selectedSeats.reduce((a,b) => a + b.price, 0);
  }
}
