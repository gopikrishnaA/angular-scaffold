import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoaderService } from '../shared/loader.service';
import { Subscription } from 'rxjs/Subscription';
import { LoaderState } from './loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  constructor(public loaderService: LoaderService) { }

  private subscription: Subscription;
  show: boolean = false;

  ngOnInit() {
    this.createSubscription()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createSubscription() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }
}
