import { Component, OnInit } from '@angular/core';
import { getJokeService } from '../shared/getJoke.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private jokeService: getJokeService) { }
  options = ['Like','UnLike', 'All']
  ratedJokes: any;
  selectedValue: string = 'All';
  isSort: boolean = false;

  ngOnInit() {
    this.ratedJokes = this.jokeService.totalJokes()
  }
  sortByTime() {
    this.isSort = !this.isSort
  }
}
