import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseWidgetComponent } from './fuse-widget.component';

describe('FuseWidgetComponent', () => {
  let component: FuseWidgetComponent;
  let fixture: ComponentFixture<FuseWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
