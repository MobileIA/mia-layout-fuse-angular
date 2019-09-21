import { TestBed } from '@angular/core/testing';

import { LayoutFuseService } from './layout-fuse.service';

describe('LayoutFuseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutFuseService = TestBed.get(LayoutFuseService);
    expect(service).toBeTruthy();
  });
});
