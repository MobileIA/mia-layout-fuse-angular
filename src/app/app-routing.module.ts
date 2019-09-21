import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuseLoginPageComponent } from 'projects/mobileia/layout-fuse/src/public-api';
import { LayoutComponent } from './pages/layout/layout.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: LayoutComponent
  },
  {
    path: 'login',
    component: FuseLoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
