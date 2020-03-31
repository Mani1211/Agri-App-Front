import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SugarManageComponent } from './sugar-manage.component';

describe('SugarManageComponent', () => {
  let component: SugarManageComponent;
  let fixture: ComponentFixture<SugarManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SugarManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SugarManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
