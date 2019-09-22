import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarStyleOneComponent } from './navbar-style-one.component';

describe('NavbarStyleOneComponent', () => {
  let component: NavbarStyleOneComponent;
  let fixture: ComponentFixture<NavbarStyleOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarStyleOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarStyleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
