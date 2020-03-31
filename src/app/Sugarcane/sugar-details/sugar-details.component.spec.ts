import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarDetailsComponent } from './sugar-details.component';

describe('SugarDetailsComponent', () => {
  let component: SugarDetailsComponent;
  let fixture: ComponentFixture<SugarDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
