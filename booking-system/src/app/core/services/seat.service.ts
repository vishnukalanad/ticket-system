import {Injectable} from '@angular/core';
import {ISeatsService, SeatsModel} from "../interfaces/seatsModel";

@Injectable({
  providedIn: 'root'
})
export class SeatService implements ISeatsService {

  constructor() {
  }

  /**
   * Function to generate seats;
   * @return - seats list;
   */
  generateSeats() {
    let rows = 8;
    let cols = 12;
    let seats: SeatsModel[] = [];
    let size = 0;
    let maxDisabled = 24;
    let maxPremium = 12;
    const normalPrice = 120;
    let charCode = 97;

    for (let i = 1; i <= (rows*cols); i++) {
      if(size === 12) {
        size = 0
        charCode++;
      }
      size++;

      const seatObj: SeatsModel = {
        seat: size.toString(),
        selected: false,
        premium: false,
        booked: false,
        seatId: i,
        price: normalPrice,
        seatCode: String.fromCharCode(charCode) + size
      }

      if(i > (rows * cols /2) && maxPremium > 0) {
        seatObj.premium = true;
        seatObj.price = seatObj.price + (seatObj.price / 100 * 25);
        maxPremium--;
      }

      if(Math.random() < 0.25 && maxDisabled > 0) {
        seatObj.booked = true;
        maxDisabled--;
      }

      seats.push(seatObj)
    }

    return seats;
  }

}
