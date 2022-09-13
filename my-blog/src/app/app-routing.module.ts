import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { ManagePostComponent } from './admin/manage-post/manage-post.component';
import { AuthGuard } from './auth/auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './viewer/homepage/homepage.component';
import { ViewerComponent } from './viewer/viewer/viewer.component';
import { ViewpostComponent } from './viewer/viewpost/viewpost.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'managepost', component: ManagePostComponent },
          { path: 'managepost/:postId', component: ManagePostComponent },
          { path: '', component: DashboardComponent }
        ]
      }
    ]
  },
  {
    path: '',
    component: ViewerComponent,
    children: [
      { path: '', component: HomepageComponent },
      { path: 'postdetail/:postId', component: ViewpostComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
