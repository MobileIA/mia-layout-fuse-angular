import { Component, OnInit, ViewEncapsulation, Inject, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FuseConfigService } from '../../services/fuse-config.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'mia-fuse-main-layout',
  templateUrl: './fuse-main-layout.component.html',
  styleUrls: ['./fuse-main-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FuseMainLayoutComponent implements OnInit, OnDestroy {

  fuseConfig: any;

  // Private
  private unsubscribeAll: Subject<any>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private fuseConfigService: FuseConfigService
  ) {
    // Set the private defaults
    this.unsubscribeAll = new Subject();
  }

  ngOnInit() {
    // Subscribe to config changes
    this.fuseConfigService.config
    .pipe(takeUntil(this.unsubscribeAll))
    .subscribe((config) => {
        this.fuseConfig = config;
    });

    this.document.body.classList.add('theme-default');
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
      // Unsubscribe from all subscriptions
      this.unsubscribeAll.next();
      this.unsubscribeAll.complete();
  }
}
