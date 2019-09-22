import { TestBed } from '@angular/core/testing';

import { FuseConfigService } from './fuse-config.service';

describe('FuseConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuseConfigService = TestBed.get(FuseConfigService);
    expect(service).toBeTruthy();
  });
});
