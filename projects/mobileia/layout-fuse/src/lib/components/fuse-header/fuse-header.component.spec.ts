import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseHeaderComponent } from './fuse-header.component';

describe('FuseHeaderComponent', () => {
  let component: FuseHeaderComponent;
  let fixture: ComponentFixture<FuseHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
