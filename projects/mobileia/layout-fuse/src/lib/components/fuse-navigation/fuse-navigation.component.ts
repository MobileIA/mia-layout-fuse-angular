import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Subject, merge } from 'rxjs';
import { FuseNavigationService } from '../../services/fuse-navigation.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'mia-fuse-navigation',
  templateUrl: './fuse-navigation.component.html',
  styleUrls: ['./fuse-navigation.component.scss']
})
export class FuseNavigationComponent implements OnInit {

    @Input()
    layout = 'vertical';

    @Input()
    navigation: any;

    // Private
    private unsubscribeAll: Subject<any>;

    /**
     *
     */
    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private fuseNavigationService: FuseNavigationService
    ) {
        // Set the private defaults
        this.unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Load the navigation either from the input or from the service
        this.navigation = this.navigation || this.fuseNavigationService.getCurrentNavigation();

        // Subscribe to the current navigation changes
        this.fuseNavigationService.onNavigationChanged
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe(() => {

                // Load the navigation
                this.navigation = this.fuseNavigationService.getCurrentNavigation();

                // Mark for check
                this.changeDetectorRef.markForCheck();
            });

        // Subscribe to navigation item
        merge(
            this.fuseNavigationService.onNavigationItemAdded,
            this.fuseNavigationService.onNavigationItemUpdated,
            this.fuseNavigationService.onNavigationItemRemoved
        ).pipe(takeUntil(this.unsubscribeAll))
         .subscribe(() => {

             // Mark for check
             this.changeDetectorRef.markForCheck();
         });
    }
}
