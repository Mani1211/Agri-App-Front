import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarExpenseEditComponent } from './sugar-expense-edit.component';

describe('SugarExpenseEditComponent', () => {
  let component: SugarExpenseEditComponent;
  let fixture: ComponentFixture<SugarExpenseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarExpenseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarExpenseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
