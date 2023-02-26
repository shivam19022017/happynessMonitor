import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessLoginComponent } from './happiness-login.component';

describe('HappinessLoginComponent', () => {
  let component: HappinessLoginComponent;
  let fixture: ComponentFixture<HappinessLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappinessLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappinessLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
