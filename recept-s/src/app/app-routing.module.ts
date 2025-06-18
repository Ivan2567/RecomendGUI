import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MedlcComponent } from './medlc/medlc.component';
import { RecformComponent } from './recform/recform.component';
import { HistoryComponent } from './history/history.component';
import { WstestComponent } from './wstest/wstest.component';
import { RegisterComponent } from './public/register/register.component';
import { LoginComponent } from './public/login/login.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { OtchetnostComponent } from './otchetnost/otchetnost.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { DocintarfaceComponent } from './docintarface/docintarface.component';
import { DocintarfaceV2Component } from './docintarface-v2/docintarface-v2.component';
import { DoclcComponent } from './doclc/doclc.component';
import { DocNavComponent } from './doc-nav/doc-nav.component';


const routes: Routes = [
  // {path:'home',component: MedlcComponent},
  // {path:'receptform',component: RecformComponent},
  // {path:'wstest',component: WstestComponent},
  //{path:'history',component: HistoryComponent},
  // {path:'otchetnost',component: OtchetnostComponent},
  {path:'doclog',component: RegFormComponent}, 
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},

  {path:'main',component: MyNavComponent,
  children: [
    {path: 'history',component: HistoryComponent},
    {path:'home',component: MedlcComponent},
    {path:'receptform',component: RecformComponent},
    {path:'wstest',component: WstestComponent}, 
    {path:'otchetnost',component: OtchetnostComponent}, 
]},
  {path:'docmain',component: DocNavComponent,
  children: [
    {path: 'dochistory',component: DocintarfaceComponent},
    {path:'dochome',component: DoclcComponent},
    {path:'doccreaterec',component: DocintarfaceV2Component},
]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
