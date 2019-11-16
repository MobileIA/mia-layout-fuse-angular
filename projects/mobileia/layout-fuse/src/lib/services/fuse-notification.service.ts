import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FuseNotification } from '../types/fuse-notification';

@Injectable({
  providedIn: 'root'
})
export class FuseNotificationService {

  clickNotification = new Subject<FuseNotification>();

  constructor() { }

  onClickNotification(): Observable<FuseNotification> {
    return this.clickNotification;
  }
}
