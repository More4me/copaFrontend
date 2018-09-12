import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CredientialComponent } from './crediential/crediential';
import { LoginComponent } from './login/login.component';
import { ServiceDeploymentComponent } from './service-deployment/service-deployment.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesModule } from './services/service.module';

@NgModule({
  declarations: [
    AppComponent,
    CredientialComponent,
    LoginComponent,
    ServiceDeploymentComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
