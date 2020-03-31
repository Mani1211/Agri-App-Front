import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarIncomeComponent } from './sugar-income.component';

describe('SugarIncomeComponent', () => {
  let component: SugarIncomeComponent;
  let fixture: ComponentFixture<SugarIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
