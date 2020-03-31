import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarIncomeEditComponent } from './sugar-income-edit.component';

describe('SugarIncomeEditComponent', () => {
  let component: SugarIncomeEditComponent;
  let fixture: ComponentFixture<SugarIncomeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarIncomeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarIncomeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
