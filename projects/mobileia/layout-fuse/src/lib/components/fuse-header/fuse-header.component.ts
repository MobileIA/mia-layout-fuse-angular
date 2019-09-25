import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { fuseAnimations } from '../../animations';

@Component({
  selector: 'mia-fuse-header',
  templateUrl: './fuse-header.component.html',
  styleUrls: ['./fuse-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class FuseHeaderComponent implements OnInit {

  @Input() title = '';

  constructor() { }

  ngOnInit() {
  }

}
