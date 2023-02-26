import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthenticationService } from './employee/auth service/authentication.service';

describe('AppComponent', () => {
  beforeEach( ()=> {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [AuthenticationService]
    });
    
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Testing sample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Testing sample');
  });
  
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement ;
    const span= compiled.querySelector('.media-body h4')
    fixture.detectChanges();
    expect(span?.textContent).toContain('Testing sample');
  });


  
});
