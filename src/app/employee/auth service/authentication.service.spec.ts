import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({})
    service = TestBed.inject(AuthenticationService);
    localStorage.clear()
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });
  it('sercive should have login() defined', () => {

    expect(service.login).toBeDefined();
  });

  it('login should return true becaose user is login', () => {
    service.login()
    expect(localStorage.getItem("user")).toBe("RudraTech")
  });
  it('sercive should have checkAuthentication() defined', () => {

    expect(service.checkAuthentication).toBeDefined();
  });

  it('checkAuthentication should return true becaose user is login', () => {
    let isUserLogin:boolean=service.checkAuthentication()
    expect(isUserLogin).toBeFalse()
    service.login()
    isUserLogin=service.checkAuthentication()
    expect(isUserLogin).toBeTrue()
  });
});
