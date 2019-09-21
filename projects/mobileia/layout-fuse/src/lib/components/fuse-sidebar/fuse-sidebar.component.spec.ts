import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseSidebarComponent } from './fuse-sidebar.component';

describe('FuseSidebarComponent', () => {
  let component: FuseSidebarComponent;
  let fixture: ComponentFixture<FuseSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
