import { Component, OnInit, Input, HostBinding, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { fuseAnimations } from '../../../animations';
import { FuseNavigationItem } from '../../../types/fuse-navigation-item';
import { Subject, merge } from 'rxjs';
import { FuseNavigationService } from '../../../services/fuse-navigation.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'mia-fuse-nav-vertical-collapsable',
  templateUrl: './nav-vertical-collapsable.component.html',
  styleUrls: ['./nav-vertical-collapsable.component.scss'],
  animations : fuseAnimations
})
export class NavVerticalCollapsableComponent implements OnInit, OnDestroy {
  @Input()
  item: FuseNavigationItem;

  @HostBinding('class')
  classes = 'nav-collapsable nav-item';

  @HostBinding('class.open')
  public isOpen = false;

  // Private
  private unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   */
  constructor(
      private changeDetectorRef: ChangeDetectorRef,
      private fuseNavigationService: FuseNavigationService,
      private router: Router
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
      // Listen for router events
      this.router.events
          .pipe(
              filter(event => event instanceof NavigationEnd),
              takeUntil(this.unsubscribeAll)
          )
          .subscribe((event: NavigationEnd) => {

              // Check if the url can be found in
              // one of the children of this item
              if ( this.isUrlInChildren(this.item, event.urlAfterRedirects) )
              {
                  this.expand();
              }
              else
              {
                  this.collapse();
              }
          });

      // Listen for collapsing of any navigation item
      this.fuseNavigationService.onItemCollapsed
          .pipe(takeUntil(this.unsubscribeAll))
          .subscribe(
              (clickedItem) => {
                  if ( clickedItem && clickedItem.children )
                  {
                      // Check if the clicked item is one
                      // of the children of this item
                      if ( this.isChildrenOf(this.item, clickedItem) )
                      {
                          return;
                      }

                      // Check if the url can be found in
                      // one of the children of this item
                      if ( this.isUrlInChildren(this.item, this.router.url) )
                      {
                          return;
                      }

                      // If the clicked item is not this item, collapse...
                      if ( this.item !== clickedItem )
                      {
                          this.collapse();
                      }
                  }
              }
          );

      // Check if the url can be found in
      // one of the children of this item
      if ( this.isUrlInChildren(this.item, this.router.url) )
      {
          this.expand();
      }
      else
      {
          this.collapse();
      }

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
   * Toggle collapse
   *
   * @param ev
   */
  toggleOpen(ev): void
  {
      ev.preventDefault();

      this.isOpen = !this.isOpen;

      // Navigation collapse toggled...
      this.fuseNavigationService.onItemCollapsed.next(this.item);
      this.fuseNavigationService.onItemCollapseToggled.next();
  }

  /**
   * Expand the collapsable navigation
   */
  expand(): void
  {
      if ( this.isOpen )
      {
          return;
      }

      this.isOpen = true;

      // Mark for check
      this.changeDetectorRef.markForCheck();

      this.fuseNavigationService.onItemCollapseToggled.next();
  }

  /**
   * Collapse the collapsable navigation
   */
  collapse(): void
  {
      if ( !this.isOpen )
      {
          return;
      }

      this.isOpen = false;

      // Mark for check
      this.changeDetectorRef.markForCheck();

      this.fuseNavigationService.onItemCollapseToggled.next();
  }

  /**
   * Check if the given parent has the
   * given item in one of its children
   *
   */
  isChildrenOf(parent, item): boolean
  {
      const children = parent.children;

      if ( !children )
      {
          return false;
      }

      if ( children.indexOf(item) > -1 )
      {
          return true;
      }

      for ( const child of children )
      {
          if ( child.children )
          {
              if ( this.isChildrenOf(child, item) )
              {
                  return true;
              }
          }
      }

      return false;
  }

  /**
   * Check if the given url can be found
   * in one of the given parent's children
   *
   */
  isUrlInChildren(parent, url): boolean
  {
      const children = parent.children;

      if ( !children )
      {
          return false;
      }

      for ( const child of children )
      {
          if ( child.children )
          {
              if ( this.isUrlInChildren(child, url) )
              {
                  return true;
              }
          }

          if ( child.url === url || url.includes(child.url) )
          {
              return true;
          }
      }

      return false;
  }

}
