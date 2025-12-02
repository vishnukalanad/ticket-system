import {Component, input} from '@angular/core';
import {LegendModel} from "../../core/interfaces/seatsModel";

@Component({
  selector: 'app-legend',
  standalone: true,
  imports: [],
  templateUrl: './legend.component.html',
  styleUrl: './legend.component.css'
})
export class LegendComponent {
  legend = input.required<LegendModel>();
}
