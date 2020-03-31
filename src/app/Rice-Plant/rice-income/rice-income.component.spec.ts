import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceIncomeComponent } from './rice-income.component';

describe('RiceIncomeComponent', () => {
  let component: RiceIncomeComponent;
  let fixture: ComponentFixture<RiceIncomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiceIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
