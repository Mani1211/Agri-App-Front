import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalerSellIncomeComponent } from './baler-sell-income.component';

describe('BalerSellIncomeComponent', () => {
  let component: BalerSellIncomeComponent;
  let fixture: ComponentFixture<BalerSellIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalerSellIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalerSellIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
