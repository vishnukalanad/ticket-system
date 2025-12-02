import {StateModel} from "../interfaces/stateModel";
import {createReducer, on} from "@ngrx/store";
import {addMovies, addSeats, toggleSeat} from "./actions";


const initialState: StateModel = {
  movie: null,
  seats: [],
};

export const stateReducer = createReducer(
  initialState,
  on(addMovies, (state, {movie}) => {
    return {
      ...
        state, movie
    }
  }),
  on(addSeats, (state, {seats}) => {
    return {
      ...state, seats
    }
  }),
  on(toggleSeat, (state, {seat}) => {
    return {
      ...state,
      seats: state.seats?.map(s => s.seatId === seat ? {...s, selected: !s.selected} : s)
    }
  }),
)
