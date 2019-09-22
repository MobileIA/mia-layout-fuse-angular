import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseNavigationComponent } from './fuse-navigation.component';

describe('FuseNavigationComponent', () => {
  let component: FuseNavigationComponent;
  let fixture: ComponentFixture<FuseNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
