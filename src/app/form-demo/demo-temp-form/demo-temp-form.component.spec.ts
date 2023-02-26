import {  ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DemoTempFormComponent } from './demo-temp-form.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('DemoTempFormComponent', () => {
  let component: DemoTempFormComponent;
  let fixture: ComponentFixture<DemoTempFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoTempFormComponent ],
      imports: [FormsModule]
    })
    ;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoTempFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit()
  });

  it('name field should be not valid',()=>{
    
      let name = fixture.debugElement.nativeElement.querySelector("#username");      
      expect(name.value).toBeFalsy();
});

it('[name - Check - Valid] - Should check name field is not valid',()=>{
   
  let name = fixture.debugElement.nativeElement.querySelector("#username"); 
    name.value='abc'
    expect(name.value).toBeTruthy();
    expect(component.forgotForm.valid).toBeTruthy();
 
});



it('[Form - Submit] - Should check form is submitted successful',waitForAsync(()=>{

  fixture.whenStable().then(()=>{

    expect(component.message).toBe("");
    let name = component.forgotForm.form.controls['username'];
    name.setValue('abc');
    component.submitForm();
    fixture.detectChanges();
    let successMsg = fixture.debugElement.query(By.css('#success-msg'));
    expect(successMsg.nativeElement.innerText).toBe(component.message);

  })

  
}));





  

  
});
