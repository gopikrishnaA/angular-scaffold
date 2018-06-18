import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeDetailsComponent } from './joke-details/joke-details.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/jokeDetails', pathMatch: 'full' },
  { path: 'jokeDetails', component: JokeDetailsComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'jokeDetails/:id', component: JokeDetailsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }