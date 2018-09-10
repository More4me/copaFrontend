import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-service-deployment',
  templateUrl: './service-deployment.component.html',
  styleUrls: ['./service-deployment.component.css']
})
export class ServiceDeploymentComponent implements OnInit {
  deploymentForm:FormGroup;
  submitted:boolean=false;
  @Input()orgName:string='';
  constructor() { }

  ngOnInit() {
    this.deploymentForm = new FormGroup({
      organizationControl: new FormControl(this.orgName, Validators.required),
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
