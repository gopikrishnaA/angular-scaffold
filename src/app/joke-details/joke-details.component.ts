import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Joke } from './joke';
import { getJokeService } from '../shared/getJoke.service';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrls: ['./joke-details.component.css']
})


export class JokeDetailsComponent implements OnInit {
  productID: any;
  joke: Joke;
  
  constructor(private jokeService: getJokeService, private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params['id'];
  }

  ngOnInit() {
    if (!this.productID) {
      this.loadUser()
    } else {
      this.joke = this.jokeService.totalJokes().filter(item => item.id === this.productID)[0]
    }
  }

  loadUser() : void {
    this.jokeService.getJoke().subscribe((data: Joke) => {
      this.joke = {
        id: data.id,
        joke: data.joke
      }
    });
  }

  rateJoke(joke, status) : void {
    this.jokeService.rateJoke({joke,status});
    if (this.productID) {
      this.router.navigate(['/jokeDetails']);
    } else {
      this.loadUser()      
    }
  }

  isRatedJokesExist(): boolean {
    return this.jokeService.getRatedJokes().length > 0
  }

}
