import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class HttpServiceHandler {
  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) { }
  get(url, options): any {
    this.loaderService.showLoader()
    return this.http.get(url, options)
    .pipe(
      tap(val => this.loaderService.hideLoader())
    )
  }
}