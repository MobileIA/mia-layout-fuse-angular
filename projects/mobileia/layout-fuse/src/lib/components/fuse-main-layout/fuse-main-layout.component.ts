import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'mia-fuse-main-layout',
  templateUrl: './fuse-main-layout.component.html',
  styleUrls: ['./fuse-main-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FuseMainLayoutComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: any,
  ) { }

  ngOnInit() {
    this.document.body.classList.add('theme-default');
  }

}
