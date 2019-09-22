import { TestBed } from '@angular/core/testing';

import { FuseMatchMediaService } from './fuse-match-media.service';

describe('FuseMatchMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuseMatchMediaService = TestBed.get(FuseMatchMediaService);
    expect(service).toBeTruthy();
  });
});
