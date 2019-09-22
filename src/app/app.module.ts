import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutFuseModule } from 'projects/mobileia/layout-fuse/src/lib/layout-fuse.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { fuseConfig } from './pages/layout/fuse-config';
import { TestComponent } from './pages/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutFuseModule.forRoot(fuseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
