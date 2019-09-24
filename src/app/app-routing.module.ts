import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './authguard.service';
import { PaymentsystemComponent } from './paymentsystem/paymentsystem.component';
import { PlaymoneyComponent } from './playmoney/playmoney.component';
import { RealmoneyComponent } from './realmoney/realmoney.component';
import { ServermanagementComponent } from './servermanagement/servermanagement.component';
import { GametabletemplateComponent } from './realmoney/ringgameconfiguration/gametabletemplate/gametabletemplate.component';


const routes: Routes = [{
  path:  '', component: LoginComponent, canActivate: [AuthGuardService]},
   {path:  'home', component: HomeComponent},
   {path:  'login', component:  LoginComponent},
   { path: 'logout', component: LogoutComponent,  canActivate: [AuthGuardService]},
   {path: 'profile', component: ProfileComponent},
   {path: 'paymentsystem', component: PaymentsystemComponent},
   {path: 'playmoney', component: PlaymoneyComponent},
   {path: 'realmoney', component: RealmoneyComponent},
   {path: 'servermanagement', component: ServermanagementComponent},
   { path: 'GTT', component: GametabletemplateComponent},
   { path: 'GTT', component: PlaymoneyComponent




}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
