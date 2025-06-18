import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegFormComponent } from '../reg-form/reg-form.component';

// Routes for child Module (publicModule). Since public module is lazy loaded in in the 
// app-routing.module the full path is `/public/login` or `/public/regiser`
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'doclog',
    component: RegFormComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }