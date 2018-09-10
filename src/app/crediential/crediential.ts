import { Component } from '@angular/core';

@Component({
  selector: 'app-crediential',
  templateUrl: './crediential.html',
  styleUrls: ['./crediential.css']
})
export class CredientialComponent {
  title = 'copaFrontent';
  selectedItem:string ='crediential';
  private userId:number;
  setUserId(event){
    console.log("LOLOLOLOLOLy",event);
    this.selectedItem='deployService';
    this.userId=event;
  }
  getUserId(){
    return this.userId.toString();
  }
}
