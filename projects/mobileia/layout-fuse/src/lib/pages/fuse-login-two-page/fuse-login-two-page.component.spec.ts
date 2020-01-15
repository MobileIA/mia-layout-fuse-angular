import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseLoginTwoPageComponent } from './fuse-login-two-page.component';

describe('FuseLoginTwoPageComponent', () => {
  let component: FuseLoginTwoPageComponent;
  let fixture: ComponentFixture<FuseLoginTwoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseLoginTwoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseLoginTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
