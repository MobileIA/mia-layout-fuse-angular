import { NgModule } from '@angular/core';
import { LayoutFuseComponent } from './layout-fuse.component';
import { FuseMainLayoutComponent } from './components/fuse-main-layout/fuse-main-layout.component';
import { FusePerfectScrollbarDirective } from './directives/fuse-perfect-scrollbar.directive';
import { FuseSidebarComponent } from './components/fuse-sidebar/fuse-sidebar.component';

@NgModule({
  declarations: [
    LayoutFuseComponent,
    FuseMainLayoutComponent,
    FusePerfectScrollbarDirective,
    FuseSidebarComponent
  ],
  imports: [
  ],
  exports: [
    LayoutFuseComponent,
    FuseMainLayoutComponent,
    FusePerfectScrollbarDirective
  ]
})
export class LayoutFuseModule { }
