import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  envUrl = '';

  constructor(private httpClient: HttpClient) {
    this.envUrl = environment.apiUrl;
  }


  getData(city: string): Observable<any | Error> {
    return this.httpClient.get<any>(this.envUrl + '?q=' + city + '&units=metric&APPID=d59c66704c09475c52432fb226735108').pipe(
      catchError(err => this.handleHttpError(err))
    );
  }


  private handleHttpError(error: HttpErrorResponse): Observable<Error> {
    let dataError = new Error();
    dataError.errorNumber = error.status;
    dataError.message = error.error;
    return throwError(dataError);
  }

}



export class Error {
  errorNumber?: number;
  message?: string;
  friedlyMessage?: string;
}

