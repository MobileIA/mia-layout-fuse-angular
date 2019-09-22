import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVerticalCollapsableComponent } from './nav-vertical-collapsable.component';

describe('NavVerticalCollapsableComponent', () => {
  let component: NavVerticalCollapsableComponent;
  let fixture: ComponentFixture<NavVerticalCollapsableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavVerticalCollapsableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVerticalCollapsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
