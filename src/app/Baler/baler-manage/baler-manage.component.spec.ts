import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalerManageComponent } from './baler-manage.component';

describe('BalerManageComponent', () => {
  let component: BalerManageComponent;
  let fixture: ComponentFixture<BalerManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalerManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalerManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
