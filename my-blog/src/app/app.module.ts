import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManagePostComponent } from './admin/manage-post/manage-post.component';
// @ts-ignore
import { QuillModule } from 'ngx-quill';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HomepageComponent } from './viewer/homepage/homepage.component';
import { ViewpostComponent } from './viewer/viewpost/viewpost.component';
import { ViewerComponent } from './viewer/viewer/viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ManagePostComponent,
    PageNotFoundComponent,
    AdminComponent,
    HomepageComponent,
    ViewpostComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
