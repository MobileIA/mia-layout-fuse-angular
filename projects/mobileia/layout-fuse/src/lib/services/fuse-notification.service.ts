import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { MiaNotification } from '@mobileia/notification';

@Injectable({
  providedIn: 'root'
})
export class FuseNotificationService {

  clickNotification = new Subject<MiaNotification>();

  constructor() { }

  onClickNotification(): Observable<MiaNotification> {
    return this.clickNotification;
  }
}
