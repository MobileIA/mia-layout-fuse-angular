import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVerticalItemComponent } from './nav-vertical-item.component';

describe('NavVerticalItemComponent', () => {
  let component: NavVerticalItemComponent;
  let fixture: ComponentFixture<NavVerticalItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavVerticalItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavVerticalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
