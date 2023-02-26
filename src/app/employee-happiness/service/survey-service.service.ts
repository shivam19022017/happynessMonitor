import { Injectable } from '@angular/core';
import { Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { RestServiceUrl } from '../constant/restServiceUrl';
import { catchError, Observable, throwError as ObservableThrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  constructor(private http: HttpClient) { }

  sendSurvey(answerArr: any){
    return this.http.post<string>('http://localhost:8080/api/survey/add', answerArr).pipe(catchError(this.handlerError));
  }

  handlerError(handlerError: any) {
    return ObservableThrowError(handlerError.error);
  }

}
