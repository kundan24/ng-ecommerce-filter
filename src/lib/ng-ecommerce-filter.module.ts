import { NgModule } from '@angular/core';
import { NgEcommerceFilterComponent } from './ng-ecommerce-filter.component';
import { BrowserModule } from '@angular/platform-browser'
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [NgEcommerceFilterComponent],
  imports: [BrowserModule,MatExpansionModule,BrowserAnimationsModule],
  exports: [NgEcommerceFilterComponent],
})
export class NgEcommerceFilterModule {}
