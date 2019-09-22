import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseToolbarComponent } from './fuse-toolbar.component';

describe('FuseToolbarComponent', () => {
  let component: FuseToolbarComponent;
  let fixture: ComponentFixture<FuseToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
