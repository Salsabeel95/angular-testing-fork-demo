import { TestBed } from '@angular/core/testing';

import { MockSpyService } from './mock-spy.service';

describe('MockSpyService', () => {
  let service: MockSpyService
  beforeEach(async () =>{
     await TestBed.configureTestingModule({
      providers:[MockSpyService]
     })
     
     service = TestBed.inject(MockSpyService);
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getValue should return ', () => {
    expect(service.getValue()).toBe("Sample value");
  });
});
