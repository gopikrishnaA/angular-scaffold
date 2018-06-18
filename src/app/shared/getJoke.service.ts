import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Joke } from '../joke-details/joke';
import { HttpServiceHandler } from '../shared/HttpServiceHandler'

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json'
  })
};

@Injectable()
export class getJokeService {
  ratedJokes: any
  joke: Joke;  
  constructor (
    private httpServiceHandler: HttpServiceHandler
  ) {}
  
  getJoke() {
    return this.httpServiceHandler.get(`https://icanhazdadjoke.com`, httpOptions);
  }
  rateJoke(data) {
    const {joke: {id, joke}, status} = data
    this.ratedJokes = {
      ...this.ratedJokes,
      [id]: {
          id,
          joke,
          status,
          timeStamp: new Date().toLocaleString()
      }
    }
  }
  getRatedJokes() {
    if (!this.ratedJokes){
      return []
    }
    return Object.keys(this.ratedJokes)
  }
  
  totalJokes() : any {
    return Object.keys(this.ratedJokes).map(key => this.ratedJokes[key])
  }

}
