import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessQuestionComponent } from './happiness-question.component';

describe('HappinessQuestionComponent', () => {
  let component: HappinessQuestionComponent;
  let fixture: ComponentFixture<HappinessQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappinessQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappinessQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
