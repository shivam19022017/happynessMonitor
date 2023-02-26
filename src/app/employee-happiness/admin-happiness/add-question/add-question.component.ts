import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../model/question';
import { QuestionService } from '../../service/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent {

  @ViewChild('question',{static:false})
  private question: ElementRef<any>;

  constructor(private questionService: QuestionService,private route: Router) {

  }
  submit(ques: string) {
    let question: Question = new Question();
    question.question = ques;
    this.questionService.addQuestions(question).subscribe((result)=>{
      this.question.nativeElement.value = ''
    });
  }

}
