import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceIncomeEditComponent } from './rice-income-edit.component';

describe('RiceIncomeEditComponent', () => {
  let component: RiceIncomeEditComponent;
  let fixture: ComponentFixture<RiceIncomeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiceIncomeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceIncomeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
