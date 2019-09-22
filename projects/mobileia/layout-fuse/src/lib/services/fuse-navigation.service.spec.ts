import { TestBed } from '@angular/core/testing';

import { FuseNavigationService } from './fuse-navigation.service';

describe('FuseNavigationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuseNavigationService = TestBed.get(FuseNavigationService);
    expect(service).toBeTruthy();
  });
});
