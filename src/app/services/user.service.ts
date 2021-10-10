import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAuth:boolean=true;
  user={
    username:"Yasmine"
  };
  constructor() { }
  login(){

  }
  signup(){

  }
  logout(){

  }
}
