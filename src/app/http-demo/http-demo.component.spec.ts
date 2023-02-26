import {  ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDemoComponent } from './http-demo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HttpDemoComponent', () => {
  let component: HttpDemoComponent;
  let fixture: ComponentFixture<HttpDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ HttpDemoComponent ]
      
    })
    ;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
