import { TestBed } from '@angular/core/testing';

import { NgEcommerceFilterService } from './ng-ecommerce-filter.service';

describe('NgEcommerceFilterService', () => {
  let service: NgEcommerceFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgEcommerceFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
