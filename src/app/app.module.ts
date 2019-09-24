import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatIconModule, MatDialogModule } from '@angular/material';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentsystemComponent } from './paymentsystem/paymentsystem.component';
import { PlaymoneyComponent } from './playmoney/playmoney.component';
import { RealmoneyComponent } from './realmoney/realmoney.component';
import { ServermanagementComponent } from './servermanagement/servermanagement.component';
import { RinggameconfigurationComponent } from './realmoney/ringgameconfiguration/ringgameconfiguration.component';
import { GametabletemplateComponent } from './realmoney/ringgameconfiguration/gametabletemplate/gametabletemplate.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    LogoutComponent,
    PaymentsystemComponent,
    PlaymoneyComponent,
    RealmoneyComponent,
    ServermanagementComponent,
    RinggameconfigurationComponent,
    GametabletemplateComponent
  ],

  imports: [
    MatInputModule, MatDialogModule, MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],


})
export class AppModule { }
