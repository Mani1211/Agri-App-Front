import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceExpenseComponent } from './rice-expense.component';

describe('RiceExpenseComponent', () => {
  let component: RiceExpenseComponent;
  let fixture: ComponentFixture<RiceExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiceExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
