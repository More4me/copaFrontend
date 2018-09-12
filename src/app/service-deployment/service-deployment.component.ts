import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-service-deployment',
  templateUrl: './service-deployment.component.html',
  styleUrls: ['./service-deployment.component.css']
})
export class ServiceDeploymentComponent implements OnInit {
  deploymentForm:FormGroup=null;
  submitted:boolean=false;
  orgObject;
  service;
  space;
  @Input('userInfo')userInfo;


  constructor(@Inject('BackendApiService') public backendApiService:BackendApiService,
  @Inject('BackendApiDumyService') public backendApiDumyService) { }

  ngOnInit() {
    console.log("user info", this.userInfo, this.userInfo.id)
    this.backendApiDumyService
    .getOrganizationByUserId(this.userInfo.id)
    .then((response)=>{
      this.orgObject=response;
      this.space=this.backendApiDumyService.getOrganizationSpace(this.orgObject.id);
      this.service=this.backendApiDumyService.getOrganizationService(this.orgObject.id);
    }).then((response)=>{this.initForm(response);});
    
  }

  initForm(orgInfo){
    this.deploymentForm = new FormGroup({
      organizationControl: new FormControl(orgInfo.name, Validators.required),
      spaceControl: new FormControl('',Validators.required),
      serviceControl:new FormControl('',Validators.required)
    });
  }

  onSubmit(){
    console.log("Clicked");
    this.submitted=true;
    console.log("ERRORS ",this.deploymentForm.controls);
  }

}
