import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutFuseComponent } from './layout-fuse.component';

describe('LayoutFuseComponent', () => {
  let component: LayoutFuseComponent;
  let fixture: ComponentFixture<LayoutFuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutFuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutFuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
