import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalerSellIncomeEditComponent } from './baler-sell-income-edit.component';

describe('BalerSellIncomeEditComponent', () => {
  let component: BalerSellIncomeEditComponent;
  let fixture: ComponentFixture<BalerSellIncomeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalerSellIncomeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalerSellIncomeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
