import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NonogramComponent } from './nonogram/nonogram.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForumComponent } from './forum/forum.component';
const routes: Routes = [
  {
    path: "signin",
    component: SigninComponent
  }
  ,
  {
    path: "nonogram",
    component: NonogramComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },

  {
    path: "forum",
    component: ForumComponent
  },
  { path: '', redirectTo: '/signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
