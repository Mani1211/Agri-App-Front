import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalerRentIncomeComponent } from './baler-rent-income.component';

describe('BalerRentIncomeComponent', () => {
  let component: BalerRentIncomeComponent;
  let fixture: ComponentFixture<BalerRentIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalerRentIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalerRentIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
