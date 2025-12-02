import {MovieModel} from "./movieModel";
import {SeatsModel} from "./seatsModel";

export interface StateModel {
  movie: MovieModel | null;
  seats: SeatsModel[];
}
