import {Observable} from "rxjs";

export interface MovieModel {
  name: string;
  screen: number;
  time: string;
}

export interface IMovieService {
  getMovie(): Observable<MovieModel>;
}
