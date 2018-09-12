import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendApiService } from './backend-api.service';
import { HttpModule } from '@angular/http';
import { BackendApiDumyService } from './backend-api-dumy.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    { provide: 'BackendApiService', useClass: BackendApiService },
    { provide: 'BackendApiDumyService', useClass:BackendApiDumyService}
  ]
})
export class ServicesModule { }