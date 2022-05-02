import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEcommerceFilterComponent } from './ng-ecommerce-filter.component';

describe('NgEcommerceFilterComponent', () => {
  let component: NgEcommerceFilterComponent;
  let fixture: ComponentFixture<NgEcommerceFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgEcommerceFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgEcommerceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
