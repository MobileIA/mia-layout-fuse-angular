import { TestBed } from '@angular/core/testing';

import { FuseNotificationService } from './fuse-notification.service';

describe('FuseNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuseNotificationService = TestBed.get(FuseNotificationService);
    expect(service).toBeTruthy();
  });
});
