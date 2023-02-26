import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError as ObservableThrowError } from 'rxjs';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  addQuestions(question: Question) {
    return this.http.post<string>('http://localhost:8080/api/question/add', question).pipe(catchError(this.handlerError));
  }

  getQuestions() {
    return this.http.get<Question[]>('http://localhost:8080/api/question/list').pipe(catchError(this.handlerError));

  }
  handlerError(handlerError: any) {
    return ObservableThrowError(handlerError.error);
  }

}
