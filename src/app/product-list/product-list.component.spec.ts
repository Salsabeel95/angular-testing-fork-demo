import { ComponentFixture, TestBed, fakeAsync, tick, flush } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let debugElement: DebugElement;
  let productService: ProductService;

  beforeEach(() => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [FormsModule],
      providers: [ProductService,
        {
          provide: Router,
          useValue: routerSpy
        }
      ]
    })
      ;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    productService = TestBed.inject(ProductService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create product service', () => {
    expect(productService).toBeTruthy();
  });

  it('should test filter product list (done)', (done) => {
    component.searchText = 'fresh';
    let productSpy = spyOn(productService, 'filterProductList').and.callThrough();

    component.filterProductList();
    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      //Get text from first <li> of the list
      const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
      done();
    });
  });

  it('should test filter product list (async)', (async () => {
    component.searchText = 'fresh';
    spyOn(productService, 'filterProductList').withArgs('fresh').and.callThrough();
    component.filterProductList();

    fixture.detectChanges();
    const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
    expect(value).not.toContain(component.searchText);


  }));

  it('should test filter product list (fakeAsync)', fakeAsync(() => {
    component.searchText = 'fresh';
    let productSpy = spyOn(productService, 'filterProductList').withArgs('fresh').and.callThrough();
    component.filterProductList();

    tick(); 
    
    fixture.detectChanges();
    const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
    expect(value).toContain(component.searchText);



  }));


  it('Example - fakeAsync and tick - tests the asynchronous code in synchronous way.',
    fakeAsync(() => {
      let isLoggedin = false;
      setTimeout(() => { isLoggedin = true; }, 100);
      expect(isLoggedin).toBe(false);
      tick(50);
      expect(isLoggedin).toBe(false);
      tick(50);
      expect(isLoggedin).toBe(true);
    }));

  it('should test filter product list using triggerEventHandler (async)', (async () => {
    component.searchText = 'fresh';
    debugElement.query(By.css('#searchButton'))
      .triggerEventHandler('click', null);

    await fixture.whenStable()
    fixture.detectChanges();

    const value = debugElement.query(By.css('#product_0')).nativeElement.innerText;
    expect(value).toContain(component.searchText);
  }));
});
