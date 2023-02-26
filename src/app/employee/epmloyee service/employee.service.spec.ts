import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    })

    service = TestBed.inject(EmployeeService);

  });

  it('service should be created', () => {

    expect(service).toBeTruthy();
  });
  it('sercive should have getListOfEmpNames() defined', () => {

    expect(service.getListOfEmpNames).toBeDefined();
  });

  it('getListOfEmpNames should return list of employee names', () => {

    service.getListOfEmpNames().subscribe({
      next: (data) => {
        expect(data!.length).toBeGreaterThan(0);
      }
    })

  });

});
