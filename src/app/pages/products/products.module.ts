import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MatCardModule,
        MatIconModule
    ]
})
export class ProductsModule { }
