import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarExpenseComponent } from './sugar-expense.component';

describe('SugarExpenseComponent', () => {
  let component: SugarExpenseComponent;
  let fixture: ComponentFixture<SugarExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
