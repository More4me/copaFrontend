import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendApiService } from './backend-api.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [
    { provide: 'BackendApiService', useClass: BackendApiService }
  ]
})
export class ServicesModule { }