import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseMainLayoutComponent } from './fuse-main-layout.component';

describe('FuseMainLayoutComponent', () => {
  let component: FuseMainLayoutComponent;
  let fixture: ComponentFixture<FuseMainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseMainLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
