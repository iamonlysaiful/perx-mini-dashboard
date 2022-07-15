import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import * as Books from './../data/example.json';


@Injectable({
  providedIn: 'root'
})
export class JsonLoaderService {

  constructor() { }

  public getJSON(): Observable<any> {
    return of(Books);
  }

}
