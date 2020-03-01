import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuseLoginPageComponent, FuseLoginTwoPageComponent } from 'projects/mobileia/layout-fuse/src/public-api';
import { LayoutComponent } from './pages/layout/layout.component';
import { TestComponent } from './pages/test/test.component';
import { TestTwoComponent } from './pages/test-two/test-two.component';

import { fuseLoginConfig } from './pages/layout/fuse-config';
import { AuthGuard } from '@mobileia/authentication';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
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
    path: 'login2',
    component: FuseLoginPageComponent,
    data: {
      config: fuseLoginConfig
    }
  },
  {
    path: 'login',
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
