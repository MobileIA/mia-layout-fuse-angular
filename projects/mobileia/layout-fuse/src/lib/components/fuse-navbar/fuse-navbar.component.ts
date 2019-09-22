import { Component, OnInit, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mia-fuse-navbar',
  templateUrl: './fuse-navbar.component.html',
  styleUrls: ['./fuse-navbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FuseNavbarComponent implements OnInit {

  fuseConfig: any;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // Add the new class name
    this.renderer.addClass(this.elementRef.nativeElement, 'vertical-style-1');
  }

}
