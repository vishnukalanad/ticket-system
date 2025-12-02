export interface SeatsModel {
  seat: string;
  seatCode: string;
  seatId: number;
  selected: boolean;
  premium: boolean;
  booked: boolean;
  price: number;
}

export interface LegendModel {
  label: string;
  color: string;
}

export interface ISeatsService {
  generateSeats(): SeatsModel[];
}
