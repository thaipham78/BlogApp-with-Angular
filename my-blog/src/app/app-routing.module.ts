import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { ManagePostComponent } from './admin/manage-post/manage-post.component';

const routes: Routes = [
  { path: 'admin', component: DashboardComponent },
  { path: 'admin/managepost', component: ManagePostComponent },
  { path: 'admin/managepost/:postId', component: ManagePostComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
