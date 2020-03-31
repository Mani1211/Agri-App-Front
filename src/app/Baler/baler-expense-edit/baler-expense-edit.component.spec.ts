import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalerExpenseEditComponent } from './baler-expense-edit.component';

describe('BalerExpenseEditComponent', () => {
  let component: BalerExpenseEditComponent;
  let fixture: ComponentFixture<BalerExpenseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalerExpenseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalerExpenseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
