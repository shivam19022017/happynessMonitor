import { Component } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-happiness-login',
  templateUrl: './happiness-login.component.html',
  styleUrls: ['./happiness-login.component.css']
})
export class HappinessLoginComponent {
  constructor(private questionService: QuestionService){

  }
showQuestions= false;
sid: string;
  submit(sid:any){
      this.sid = sid;
      this.showQuestions = true;
  }
}
