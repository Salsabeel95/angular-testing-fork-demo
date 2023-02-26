import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  
  constructor() { }

  login(){
    localStorage.setItem('user','RudraTech');
  }

  checkAuthentication(){
  
    return (localStorage.getItem('user')=='RudraTech');
  }
}
