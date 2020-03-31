import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceExpenseEditComponent } from './rice-expense-edit.component';

describe('RiceExpenseEditComponent', () => {
  let component: RiceExpenseEditComponent;
  let fixture: ComponentFixture<RiceExpenseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiceExpenseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceExpenseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
