import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {
  url = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) { }
  getMessage (){
    return this.http.get(this.url)
  }
}
