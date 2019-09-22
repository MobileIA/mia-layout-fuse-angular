import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseNavbarComponent } from './fuse-navbar.component';

describe('FuseNavbarComponent', () => {
  let component: FuseNavbarComponent;
  let fixture: ComponentFixture<FuseNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
