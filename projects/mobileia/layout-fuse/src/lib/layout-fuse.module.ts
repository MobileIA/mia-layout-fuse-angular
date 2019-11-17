import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
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
import { FuseNavbarComponent } from './components/fuse-navbar/fuse-navbar.component';
import { FUSE_CONFIG } from './services/fuse-config.service';
import { NavbarStyleOneComponent } from './components/fuse-navbar/navbar-style-one/navbar-style-one.component';
import { FuseNavigationComponent } from './components/fuse-navigation/fuse-navigation.component';
import { NavVerticalGroupComponent } from './components/fuse-navigation/nav-vertical-group/nav-vertical-group.component';
import { NavVerticalCollapsableComponent } from './components/fuse-navigation/nav-vertical-collapsable/nav-vertical-collapsable.component';
import { NavVerticalItemComponent } from './components/fuse-navigation/nav-vertical-item/nav-vertical-item.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FuseToolbarComponent } from './components/fuse-toolbar/fuse-toolbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FuseFooterComponent } from './components/fuse-footer/fuse-footer.component';
import { FuseHeaderComponent } from './components/fuse-header/fuse-header.component';
import { FuseWidgetComponent } from './components/fuse-widget/fuse-widget.component';
import { NotificationModule } from '@mobileia/notification';

@NgModule({
  declarations: [
    LayoutFuseComponent,
    FuseMainLayoutComponent,
    FusePerfectScrollbarDirective,
    FuseSidebarComponent,
    FuseLoginPageComponent,
    FuseNavbarComponent,
    NavbarStyleOneComponent,
    FuseNavigationComponent,
    NavVerticalGroupComponent,
    NavVerticalCollapsableComponent,
    NavVerticalItemComponent,
    FuseToolbarComponent,
    FuseFooterComponent,
    FuseHeaderComponent,
    FuseWidgetComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    FlexLayoutModule,

    BrowserAnimationsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,

    NotificationModule
  ],
  exports: [
    LayoutFuseComponent,
    FuseMainLayoutComponent,
    FusePerfectScrollbarDirective,
    FuseLoginPageComponent,
    FuseSidebarComponent,
    FuseHeaderComponent,
    FuseWidgetComponent
  ]
})
export class LayoutFuseModule {

  constructor(@Optional() @SkipSelf() parentModule: LayoutFuseModule) {
      if ( parentModule ) {
          throw new Error('FuseModule is already loaded. Import it in the AppModule only!');
      }
  }

  static forRoot(config): ModuleWithProviders {
      return {
          ngModule : LayoutFuseModule,
          providers: [
              {
                  provide : FUSE_CONFIG,
                  useValue: config
              }
          ]
      };
  }
}
