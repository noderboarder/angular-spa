import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeciesversionsService {

  apiBaseUrl = 'http://localhost/dev/tcxapp';

  // TODO backend 연동하기(dynamic)
  speciesId = '';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getSpecies(){
    return this.http.get(`${this.apiBaseUrl}/species`).pipe(catchError(this.handlingError));
  }

  // tslint:disable-next-line:typedef
  getVersions(speciesId){
    return this.http.get(`${this.apiBaseUrl}/versions/${this.speciesId}`).pipe(catchError(this.handlingError));
  }

  // tslint:disable-next-line:typedef
  private handlingError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent){
      console.error(error.error.message);
    } else {
      console.error(`Code from backedn ${error.status}, ` + `body was: ${error.error}`);
    }

    return throwError('Please try later');
  }
}
