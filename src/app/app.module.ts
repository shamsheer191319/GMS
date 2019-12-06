import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule, MatIconModule, MatDialogModule, MatTableModule } from '@angular/material';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentsystemComponent } from './paymentsystem/paymentsystem.component';
import { PlaymoneyComponent } from './playmoney/playmoney.component';
import { RealmoneyComponent } from './realmoney/realmoney.component';
import { RinggameconfigurationComponent } from './realmoney/ringgameconfiguration/ringgameconfiguration.component';
import { GametabletemplateComponent } from './realmoney/ringgameconfiguration/gametabletemplate/gametabletemplate.component';
import { MasterdataComponent } from './masterdata/masterdata.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TemplatelistComponent } from './realmoney/ringgameconfiguration/templatelist/templatelist.component';
import { ServermanagementComponent } from './servermanagement/servermanagement.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {MatSortModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';

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
    RinggameconfigurationComponent,
    GametabletemplateComponent,
    MasterdataComponent,
    TemplatelistComponent,
    ServermanagementComponent
  ],
  imports: [
    MatInputModule, MatDialogModule, MatButtonModule, NgbModule,MatSortModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  exports:[ MatTableModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
