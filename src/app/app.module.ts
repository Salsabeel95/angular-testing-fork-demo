import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EventTestComponent } from './event-test/event-test.component';
import { EmployeeService } from './employee/employee.service';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomDirectiveDemoComponent } from './custom-directive-demo/custom-directive-demo.component';
import { HelloDirective } from './custom-directive-demo/hello.directive';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { SquarePipe } from './custom-pipe/square.pipe';
import { SpyDemoComponent } from './spy-demo/spy-demo.component';
import { InOutDemoComponent } from './in-out-demo/in-out-demo.component';
import { UserDetailComponent } from './in-out-demo/user-detail/user-detail.component';
import { DemoReactFormComponent } from './form-demo/demo-react-form/demo-react-form.component';
import { DemoTempFormComponent } from './form-demo/demo-temp-form/demo-temp-form.component';
import { HttpDemoComponent } from './http-demo/http-demo.component';
import { MarbleTestComponent } from './marble-test/marble-test.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './employee/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EventTestComponent,
    ProductListComponent,
    
    CustomDirectiveDemoComponent,
    HelloDirective,
    CustomPipeComponent,
    SquarePipe,
    SpyDemoComponent,
    InOutDemoComponent,
    UserDetailComponent,
    DemoReactFormComponent,
    DemoTempFormComponent,
    HttpDemoComponent,
    MarbleTestComponent,
    IntroductionComponent,
    ProductDetailComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    NgbModule
  ],
  providers: [AuthenticationService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
