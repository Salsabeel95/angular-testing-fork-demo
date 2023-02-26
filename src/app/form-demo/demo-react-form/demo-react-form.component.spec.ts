import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { DemoReactFormComponent } from "./demo-react-form.component";


describe("FormDemoComponent", () => {
    let component: DemoReactFormComponent;
    let fixture: ComponentFixture<DemoReactFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DemoReactFormComponent],
            imports: [FormsModule, ReactiveFormsModule]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DemoReactFormComponent);
        component = fixture.componentInstance;
        component.ngOnInit()
    });
    it("form should be invalid when empty", () => {
        expect(component.loginForm.controls['useremail'].value).toBeFalsy()
        expect(component.loginForm.controls['userpassword'].value).toBeFalsy()
        expect(component.loginForm.valid).toBeFalsy()
    })
    it("email should be invalid with value xx", () => {
        let email = component.loginForm.controls['useremail']
        expect(email.errors?.['required']).toBeTrue()
        email.setValue("xx")
        expect(email.value).toBe("xx")
        expect(email.valid).toBeFalse()
        expect(email.errors?.['email']).toBeTrue()
        expect(component.loginForm.valid).toBeFalsy()
    })
    it("email should be invalid with value xx", () => {
        let email = component.loginForm.controls['useremail']
        let password = component.loginForm.controls['userpassword']
        email.setValue("xx@xx.com")
        password.setValue("123456")
        expect(component.loginForm.valid).toBeTrue()
        component.submitLoginForm()        
        expect(component.message).toContain("Form Submitted Successfuly")
        fixture.detectChanges()
        let div=fixture.debugElement.nativeElement.querySelector("#success-message")
        expect(div.textContent).toBe("Form Submitted Successfuly")
    })
});
