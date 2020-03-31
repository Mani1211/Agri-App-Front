import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceManageComponent } from './rice-manage.component';

describe('RiceManageComponent', () => {
  let component: RiceManageComponent;
  let fixture: ComponentFixture<RiceManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiceManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
