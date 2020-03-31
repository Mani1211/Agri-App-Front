import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalerDetailsComponent } from './baler-details.component';

describe('BalerDetailsComponent', () => {
  let component: BalerDetailsComponent;
  let fixture: ComponentFixture<BalerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
