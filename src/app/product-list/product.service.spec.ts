import { TestBed, ComponentFixture, flush } from '@angular/core/testing';
import { async, fakeAsync, tick } from '@angular/core/testing';

import { ProductService } from './product.service';
import { By } from '@angular/platform-browser';

describe('ProductService', () => {


  beforeEach(() => TestBed.configureTestingModule({

    providers: [ProductService]
  }));

  beforeEach(() => {
    //fixture = TestBed.createComponent(ProductListComponent);
  });
  it('should filter product list using given value', () => {
    const service: ProductService = TestBed.inject(ProductService);
    service.filterProductList('fresh').then((data) => {
      expect(data.length).toBeGreaterThan(0);
      expect(data[0].title.toLowerCase()).toContain('fresh');

    });
  });

  it('should be created', () => {
    const service: ProductService = TestBed.inject(ProductService);
    expect(service).toBeTruthy();
  });

  it('should filter product list using given value', async () => {
    const service: ProductService = TestBed.inject(ProductService);
    let data = await service.filterProductList('eggs')
    expect(data.length).toBeGreaterThan(0);
    expect(data[0].title.toLowerCase()).toContain('brown eggs');


  })

});
