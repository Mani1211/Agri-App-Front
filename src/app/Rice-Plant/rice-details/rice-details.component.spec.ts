import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceDetailsComponent } from './rice-details.component';

describe('RiceDetailsComponent', () => {
  let component: RiceDetailsComponent;
  let fixture: ComponentFixture<RiceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
