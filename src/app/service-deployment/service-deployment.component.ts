import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';
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
  services:Array<Object>=null;
  spaces:Array<Object>=null;
  @Input('userInfo')userInfo;
  @Output('gitlabLink') public gitlabLinkEmitter = new EventEmitter();


  constructor(@Inject('BackendApiService') public backendApiService:BackendApiService,
  @Inject('BackendApiDumyService') public backendApiDumyService) { }

  ngOnInit() {
    this.backendApiDumyService
    .getOrganizationByUserId(this.userInfo.id)
    .then((response)=>{
      this.orgObject=response;
      this.backendApiDumyService.getOrganizationSpace(this.orgObject.id).then((response)=>{
        this.spaces=response.spaces;
      });
      
      this.backendApiDumyService.getOrganizationService(this.orgObject.id).then((response)=>{
        this.services=response.services;
      });
    }).then((response)=>{this.initForm(this.orgObject.name);});
    
  }

  initForm(orgName){
    this.deploymentForm = new FormGroup({
      organizationControl: new FormControl(orgName, Validators.required),
      spaceControl: new FormControl(null,Validators.required),
      serviceControl:new FormControl(null,Validators.required),
      urlControl: new FormControl('', Validators.pattern("^.*(?:gitlab\.forge\.orange-labs\.fr).*$"))
    });
  }

  onSubmit(){
    
    this.submitted=true;
    if(this.deploymentForm.valid){
    var project_data=this.deploymentForm.value;
    this.backendApiDumyService.getGitlabPiplineLink(project_data).then((response)=>{
      this.gitlabLinkEmitter.emit(response);
    });
  }
  }
  
  
}
