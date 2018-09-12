import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, MinLengthValidator } from "@angular/forms";
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm:FormGroup;
  submitted:boolean=false;
  @Output('userId') public userInfoEmitter = new EventEmitter();
  constructor(@Inject('BackendApiService') public backendApiService:BackendApiService,
  @Inject('BackendApiDumyService') public backendApiDumy) { }

  ngOnInit() {
    this.userForm= new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(100)])
    });
  }

  onSubmit(){
    console.log("Clicked");
    console.log("userForm",this.userForm.controls);
    this.submitted=true;
    var user=this.userForm.value;
  //   if(!this.userForm.invalid){
  //   var user=this.userForm.value;
  //   this.backendApiService.login(user.email, user.password).subscribe(
  //     response=> this.userInfoEmitter.emit(response)
  //   );
  // }
  if(!this.userForm.invalid){
    this.backendApiDumy.login(user.email,user.password).then((response)=>{
      console.log("ressssssspinse",response);
      this.userInfoEmitter.emit(response);});
    console.log("userInfo",user.email+ ","+user.password);
  }
}

}
