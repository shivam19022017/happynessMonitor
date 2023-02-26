import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SurveyService } from '../service/survey-service.service';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, RowHeightParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { QuestionService } from '../service/question.service';
import { Answer } from '../model/answer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-happiness-question',
  templateUrl: './happiness-question.component.html',
  styleUrls: ['./happiness-question.component.css']
})
export class HappinessQuestionComponent implements OnInit {

  @Input()
  userName: string;
  test = '';
  answersArr: Map<number, number> = new Map();
  public columnDefs: ColDef[] = [

    {
      field: 'question',
      headerName: 'Questions',
      minWidth: 600
    },
    {
      headerName: 'Answer',
      minWidth: 250,
      type: 'rightAligned',
      cellStyle: { 'padding': '5px' },
      cellRenderer: function (params: any) {
        return "<div class='radio-container'>" +
          "<input type='radio' class='btn-check' data-action-type='1' value=1 name=" + params.rowIndex.toString() + " id=" + params.rowIndex.toString() + 'Agree' + " autocomplete='off'>" +
          "<label class='btn btn-outline-success' for=" + params.rowIndex.toString() + 'Agree' + " >Agree</label>" +
          "<input type='radio' class='btn-check' data-action-type='-1' value=-1 name=" + params.rowIndex.toString() + " id=" + params.rowIndex.toString() + 'DisAgree' + " autocomplete='off'>" +
          "<label class='btn btn-outline-success' for=" + params.rowIndex.toString() + 'DisAgree' + " >DisAgree</label>" +
          "<input type='radio' class='btn-check' data-action-type='0' value=0 name=" + params.rowIndex.toString() + " id=" + params.rowIndex.toString() + 'None' + " autocomplete='off'>" +
          "<label class='btn btn-outline-success' for=" + params.rowIndex.toString() + 'None' + " >None</label>" +
          "</div>"
      }
    }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;
  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  totalQuestions: number;

  constructor(private http: HttpClient, private questionService: QuestionService, private survey: SurveyService, private route: Router) {


  }
  ngOnInit(): void {


  }

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.questionService.getQuestions();
    this.rowData$.subscribe(res => {
      this.totalQuestions = res.length;
    })
  }
  onCellClicked(cellEvent: any): void {
    if (cellEvent.event.target.getAttribute('data-action-type') != null) {
      let ans: Answer = new Answer();
      ans.id = cellEvent.data.qid;
      ans.answer = parseInt(cellEvent.event.target.getAttribute('data-action-type'), 10);
      this.answersArr.set(ans.id, ans.answer);
    }
  }

  getRowHeight(params: RowHeightParams): number | undefined | null {
    return 50;
  }

  submit() {
    if (this.answersArr.size == this.totalQuestions) {
      let overAllAns = 0;
      for (let value of this.answersArr.values()) {
        overAllAns = overAllAns + value;
      }
      if (this.userName) {
        this.survey.sendSurvey({ 'userName': this.userName, 'happinessMessure': overAllAns }).subscribe((res) => {
          this.route.navigate(['/']);
        });
      }
    }
  }

}
