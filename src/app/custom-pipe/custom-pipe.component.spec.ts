import {  ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeComponent } from './custom-pipe.component';
import { FormsModule } from '@angular/forms';
import { SquarePipe } from './square.pipe';

describe('CustomPipeComponent', () => {
  let component: CustomPipeComponent;
  let fixture: ComponentFixture<CustomPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPipeComponent, SquarePipe ],
      imports: [ FormsModule]
    })
    ;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
