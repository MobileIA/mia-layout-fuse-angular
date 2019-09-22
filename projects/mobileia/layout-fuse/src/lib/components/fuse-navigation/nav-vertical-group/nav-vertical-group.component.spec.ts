import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVerticalGroupComponent } from './nav-vertical-group.component';

describe('NavVerticalGroupComponent', () => {
  let component: NavVerticalGroupComponent;
  let fixture: ComponentFixture<NavVerticalGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavVerticalGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVerticalGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
