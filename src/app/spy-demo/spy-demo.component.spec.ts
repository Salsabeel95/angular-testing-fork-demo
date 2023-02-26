import {  ComponentFixture, TestBed } from "@angular/core/testing";

import { SpyDemoComponent } from "./spy-demo.component";
import { MockSpyService } from './mock-spy.service';

describe("SpyDemoComponent", () => {
  let component: SpyDemoComponent;
  let fixture: ComponentFixture<SpyDemoComponent>;
  let service:MockSpyService
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpyDemoComponent],
      providers:[MockSpyService]
      
    });
  });

  beforeEach(()=>{    
    fixture = TestBed.createComponent(SpyDemoComponent);
    component = fixture.componentInstance;
    service= TestBed.inject(MockSpyService)
  })
  it("should call getValue from MockSpyService inside ngOninit",function(){

   spyOn(service,"getValue")
  //  component.ngOnInit(); //or
   fixture.detectChanges()
   expect(service.getValue).toHaveBeenCalled()
   expect(service.getValue).toHaveBeenCalledTimes(1)

  })

});

