import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalerExpenseComponent } from './baler-expense.component';

describe('BalerExpenseComponent', () => {
  let component: BalerExpenseComponent;
  let fixture: ComponentFixture<BalerExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalerExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalerExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
