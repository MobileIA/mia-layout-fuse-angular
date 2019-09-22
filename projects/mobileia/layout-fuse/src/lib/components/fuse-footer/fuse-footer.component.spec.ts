import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseFooterComponent } from './fuse-footer.component';

describe('FuseFooterComponent', () => {
  let component: FuseFooterComponent;
  let fixture: ComponentFixture<FuseFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
