import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHappinessComponent } from './employee-happiness.component';

describe('EmployeeHappinessComponent', () => {
  let component: EmployeeHappinessComponent;
  let fixture: ComponentFixture<EmployeeHappinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeHappinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeHappinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
