import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { components } from './components';
import { getJokeService } from './shared/getJoke.service';
import { filters } from './filters/index';
import { AppComponent } from './app.component';
import { LoaderService } from './shared/loader.service';
import { HttpServiceHandler } from './shared/HttpServiceHandler';

@NgModule({
  declarations: [
    components,
    filters
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    getJokeService,
    LoaderService,
    HttpServiceHandler
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
