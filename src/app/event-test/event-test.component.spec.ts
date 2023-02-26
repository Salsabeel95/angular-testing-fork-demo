import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { EventTestComponent } from "./event-test.component";

describe("EventTestComponent", () => {
  let component: EventTestComponent;
  let fixture: ComponentFixture<EventTestComponent>;
  let de: DebugElement
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventTestComponent],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventTestComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });


  it("should coutnclicks  increase after clicking", function () {
    var btn = de.query(By.css("#btnAddClick"))
    var h1Ele = de.query(By.css("h1"))
    fixture.detectChanges()
    btn.triggerEventHandler("click")
    fixture.detectChanges()
    expect(component.countClicks).toEqual(1)
    expect(h1Ele.nativeElement.textContent).toEqual("1")


  })
  it("should coutnclicks decrease after clicking", function () {
    var btn = de.query(By.css("#btnRemoveClick"))
    var h1Ele = de.query(By.css("h1"))
    fixture.detectChanges()
    btn.triggerEventHandler("mouseover")
    fixture.detectChanges()
    expect(component.countClicks).toEqual(-1)
    expect(h1Ele.nativeElement.textContent).toEqual("-1")


  })
  
});
