import { TestBed } from '@angular/core/testing';

import { FuseSplashScreenService } from './fuse-splash-screen.service';

describe('FuseSplashScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuseSplashScreenService = TestBed.get(FuseSplashScreenService);
    expect(service).toBeTruthy();
  });
});
