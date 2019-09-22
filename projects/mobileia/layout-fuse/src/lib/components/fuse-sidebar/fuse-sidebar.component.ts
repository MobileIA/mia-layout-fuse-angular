import { Component, OnInit, Input, HostBinding, ElementRef, Renderer2, ViewEncapsulation, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mia-fuse-sidebar',
  templateUrl: './fuse-sidebar.component.html',
  styleUrls: ['./fuse-sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FuseSidebarComponent implements OnInit {

  // Position
  @Input()
  position: 'left' | 'right' = 'left';

  // Locked Open
  @Input()
  lockedOpen: string;

  // Open
  @HostBinding('class.open')
  opened: boolean;

  // Folded width
  @Input()
  foldedWidth: number;

  // Folded changed
  @Output()
  foldedChanged: EventEmitter<boolean>;

  // Private
  private _folded: boolean;

  @HostBinding('class.animations-enabled')
  private _animationsEnabled: boolean;

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  /**
   * Enable the animations
   *
   * @private
   */
  private _enableAnimations(): void {
      // Return if animations already enabled
      if ( this._animationsEnabled )
      {
          return;
      }

      // Enable the animations
      this._animationsEnabled = true;

      // Mark for check
      this._changeDetectorRef.markForCheck();
  }

  /**
   * Folded
   *
   */
  @Input()
  set folded(value: boolean) {
      // Set the folded
      this._folded = value;

      // Return if the sidebar is closed
      if ( !this.opened ) {
          return;
      }

      // Programmatically add/remove padding to the element
      // that comes after or before based on the position
      let sibling,
          styleRule;

      const styleValue = this.foldedWidth + 'px';

      // Get the sibling and set the style rule
      if ( this.position === 'left' )
      {
          sibling = this._elementRef.nativeElement.nextElementSibling;
          styleRule = 'padding-left';
      }
      else
      {
          sibling = this._elementRef.nativeElement.previousElementSibling;
          styleRule = 'padding-right';
      }

      // If there is no sibling, return...
      if ( !sibling )
      {
          return;
      }

      // If folded...
      if ( value )
      {
          // Fold the sidebar
          this.fold();

          // Set the folded width
          this._renderer.setStyle(this._elementRef.nativeElement, 'width', styleValue);
          this._renderer.setStyle(this._elementRef.nativeElement, 'min-width', styleValue);
          this._renderer.setStyle(this._elementRef.nativeElement, 'max-width', styleValue);

          // Set the style and class
          this._renderer.setStyle(sibling, styleRule, styleValue);
          this._renderer.addClass(this._elementRef.nativeElement, 'folded');
      }
      // If unfolded...
      else {
          // Unfold the sidebar
          this.unfold();

          // Remove the folded width
          this._renderer.removeStyle(this._elementRef.nativeElement, 'width');
          this._renderer.removeStyle(this._elementRef.nativeElement, 'min-width');
          this._renderer.removeStyle(this._elementRef.nativeElement, 'max-width');

          // Remove the style and class
          this._renderer.removeStyle(sibling, styleRule);
          this._renderer.removeClass(this._elementRef.nativeElement, 'folded');
      }

      // Emit the 'foldedChanged' event
      this.foldedChanged.emit(this.folded);
  }

  get folded(): boolean {
      return this._folded;
  }

  /**
   * Public Methods
   */

   /**
    * Fold the sidebar permanently
    */
  fold(): void {
      // Only work if the sidebar is not folded
      if ( this.folded )
      {
          return;
      }

      // Enable the animations
      this._enableAnimations();

      // Fold
      this.folded = true;

      // Mark for check
      this._changeDetectorRef.markForCheck();
  }

  /**
   * Unfold the sidebar permanently
   */
  unfold(): void {
      // Only work if the sidebar is folded
      if ( !this.folded )
      {
          return;
      }

      // Enable the animations
      this._enableAnimations();

      // Unfold
      this.folded = false;

      // Mark for check
      this._changeDetectorRef.markForCheck();
  }
}
