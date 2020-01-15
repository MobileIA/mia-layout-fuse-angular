import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuseLoginPageComponent, FuseLoginTwoPageComponent } from 'projects/mobileia/layout-fuse/src/public-api';
import { LayoutComponent } from './pages/layout/layout.component';
import { TestComponent } from './pages/test/test.component';
import { TestTwoComponent } from './pages/test-two/test-two.component';

import { fuseLoginConfig } from './pages/layout/fuse-config';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'test-two',
        component: TestTwoComponent
      },
    ]
  },
  {
    path: 'login',
    component: FuseLoginPageComponent,
    data: {
      config: fuseLoginConfig
    }
  },
  {
    path: 'login2',
    component: FuseLoginTwoPageComponent,
    data: {
      config: fuseLoginConfig
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
