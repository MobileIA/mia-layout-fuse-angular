import { TestBed } from '@angular/core/testing';

import { FuseSidebarService } from './fuse-sidebar.service';

describe('FuseSidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuseSidebarService = TestBed.get(FuseSidebarService);
    expect(service).toBeTruthy();
  });
});
