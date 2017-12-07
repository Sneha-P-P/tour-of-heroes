import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { heroes } from './heroes';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

  constructor(private http: Http) { }
  getHeroes(): Observable<Object> {
    // return of(heroes);
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`).map((res: Response) => res.json());
  }

}
