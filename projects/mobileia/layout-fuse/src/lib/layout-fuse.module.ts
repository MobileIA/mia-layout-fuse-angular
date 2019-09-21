import { NgModule } from '@angular/core';
import { LayoutFuseComponent } from './layout-fuse.component';
import { FuseMainLayoutComponent } from './components/fuse-main-layout/fuse-main-layout.component';
import { FusePerfectScrollbarDirective } from './directives/fuse-perfect-scrollbar.directive';
import { FuseSidebarComponent } from './components/fuse-sidebar/fuse-sidebar.component';
import { FuseLoginPageComponent } from './pages/fuse-login-page/fuse-login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LayoutFuseComponent,
    FuseMainLayoutComponent,
    FusePerfectScrollbarDirective,
    FuseSidebarComponent,
    FuseLoginPageComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [
    LayoutFuseComponent,
    FuseMainLayoutComponent,
    FusePerfectScrollbarDirective,
    FuseLoginPageComponent
  ]
})
export class LayoutFuseModule { }
