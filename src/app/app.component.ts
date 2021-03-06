import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FuseSplashScreenService } from 'projects/mobileia/layout-fuse/src/lib/services/fuse-splash-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'mia-layout-fuse';

  constructor(
    @Inject(DOCUMENT) private document: any,
    private splashScreenService: FuseSplashScreenService
  ) {

  }
}
