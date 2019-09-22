import { Component, OnInit, HostBinding, Input, ChangeDetectorRef } from '@angular/core';
import { FuseNavigationItem } from '../../../types/fuse-navigation-item';
import { Subject, merge } from 'rxjs';
import { FuseNavigationService } from '../../../services/fuse-navigation.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'mia-fuse-nav-vertical-group',
  templateUrl: './nav-vertical-group.component.html',
  styleUrls: ['./nav-vertical-group.component.scss']
})
export class NavVerticalGroupComponent implements OnInit {

  @HostBinding('class')
    classes = 'nav-group nav-item';

    @Input()
    item: FuseNavigationItem;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     */

    /**
     *
     * @param {ChangeDetectorRef} _changeDetectorRef
     * @param {FuseNavigationService} _fuseNavigationService
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _fuseNavigationService: FuseNavigationService
    )
    {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to navigation item
        merge(
            this._fuseNavigationService.onNavigationItemAdded,
            this._fuseNavigationService.onNavigationItemUpdated,
            this._fuseNavigationService.onNavigationItemRemoved
        ).pipe(takeUntil(this._unsubscribeAll))
         .subscribe(() => {

             // Mark for check
             this._changeDetectorRef.markForCheck();
         });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
