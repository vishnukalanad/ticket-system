import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MovieModel} from "../interfaces/movieModel";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  // Return the movie details
  getMovie(): Observable<MovieModel> {
    return of({
      name: 'The Midnight Chronicles',
      screen: 3,
      time: '2025-12-02T14:00:00.000Z'
    })
  }
}
