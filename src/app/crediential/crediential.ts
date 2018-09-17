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
  private gitlabUrl:string;
  setUser(event){
    this.selectedItem='deployService';
    this.user=event;
  }
  getUser(){
    return this.user;
  }

  setgitLabUrl(gitlabUrl){
    this.selectedItem='details';
    this.gitlabUrl=gitlabUrl;
  }

  getGitLabURL(){
    return this.gitlabUrl;
  }
}

