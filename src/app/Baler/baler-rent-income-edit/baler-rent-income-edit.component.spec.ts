import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalerRentIncomeEditComponent } from './baler-rent-income-edit.component';

describe('BalerRentIncomeEditComponent', () => {
  let component: BalerRentIncomeEditComponent;
  let fixture: ComponentFixture<BalerRentIncomeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalerRentIncomeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalerRentIncomeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
