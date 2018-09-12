import { Component } from '@angular/core';

@Component({
  selector: 'app-crediential',
  templateUrl: './crediential.html',
  styleUrls: ['./crediential.css']
})
export class CredientialComponent {
  title = 'copaFrontent';
  selectedItem:string ='crediential';
  private user:object;
  setUser(event){
    console.log("event ===> ",event);
    this.selectedItem='deployService';
    this.user=event;
  }
  getUser(){
    return this.user;
  }
}
