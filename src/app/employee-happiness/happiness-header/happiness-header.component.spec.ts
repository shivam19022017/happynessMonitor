import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessHeaderComponent } from './happiness-header.component';

describe('HappinessHeaderComponent', () => {
  let component: HappinessHeaderComponent;
  let fixture: ComponentFixture<HappinessHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HappinessHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappinessHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
