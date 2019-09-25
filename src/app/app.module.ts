import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutFuseModule } from 'projects/mobileia/layout-fuse/src/lib/layout-fuse.module';
import { LayoutComponent } from './pages/layout/layout.component';
import { fuseConfig } from './pages/layout/fuse-config';
import { TestComponent } from './pages/test/test.component';
import { TestTwoComponent } from './pages/test-two/test-two.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TestComponent,
    TestTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutFuseModule.forRoot(fuseConfig),

    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
