import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseLoginPageComponent } from './fuse-login-page.component';

describe('FuseLoginPageComponent', () => {
  let component: FuseLoginPageComponent;
  let fixture: ComponentFixture<FuseLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
