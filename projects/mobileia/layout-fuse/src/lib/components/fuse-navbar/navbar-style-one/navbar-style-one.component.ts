import { Component, OnInit, ViewChild } from '@angular/core';
import { FusePerfectScrollbarDirective } from '../../../directives/fuse-perfect-scrollbar.directive';
import { Subject } from 'rxjs';
import { FuseConfigService } from '../../../services/fuse-config.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil, take, delay } from 'rxjs/operators';
import { FuseNavigationService } from '../../../services/fuse-navigation.service';

@Component({
  selector: 'mia-fuse-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss']
})
export class NavbarStyleOneComponent implements OnInit {

  fuseConfig: any;
  navigation: any;

  // Private
  private fusePerfectScrollbar: FusePerfectScrollbarDirective;
  private unsubscribeAll: Subject<any>;

  constructor(
    private fuseConfigService: FuseConfigService,
    private fuseNavigationService: FuseNavigationService,
    //private fuseSidebarService: FuseSidebarService,
    private router: Router
  ) {
    // Set the private defaults
    this.unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Directive
    @ViewChild(FusePerfectScrollbarDirective, {static: true})
    set directive(theDirective: FusePerfectScrollbarDirective) {
        if ( !theDirective ) {
            return;
        }

        this.fusePerfectScrollbar = theDirective;

        // Update the scrollbar on collapsable item toggle
        this.fuseNavigationService.onItemCollapseToggled
            .pipe(
                delay(500),
                takeUntil(this.unsubscribeAll)
            )
            .subscribe(() => {
                this.fusePerfectScrollbar.update();
            });

        // Scroll to the active item position
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                take(1)
            )
            .subscribe(() => {
                    setTimeout(() => {
                        this.fusePerfectScrollbar.scrollToElement('navbar .nav-link.active', -120);
                    });
                }
            );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void{
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                takeUntil(this.unsubscribeAll)
            )
            .subscribe(() => {
                    /*if ( this._fuseSidebarService.getSidebar('navbar') )
                    {
                        this._fuseSidebarService.getSidebar('navbar').close();
                    }*/
                }
            );

        // Subscribe to the config changes
        this.fuseConfigService.config
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe((config) => {
                this.fuseConfig = config;
            });

        // Get current navigation
        this.fuseNavigationService.onNavigationChanged
            .pipe(
                filter(value => value !== null),
                takeUntil(this.unsubscribeAll)
            )
            .subscribe(() => {
                this.navigation = this.fuseNavigationService.getCurrentNavigation();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle sidebar opened status
     */
    toggleSidebarOpened(): void {
        //this.fuseSidebarService.getSidebar('navbar').toggleOpen();
    }

    /**
     * Toggle sidebar folded status
     */
    toggleSidebarFolded(): void {
        //this.fuseSidebarService.getSidebar('navbar').toggleFold();
    }

}
