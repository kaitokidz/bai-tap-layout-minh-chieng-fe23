import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ProductComponent } from './product/product.component';
import { SmartphoneComponent } from './product/smartphone/smartphone.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ItemComponent } from './product/item/item.component';
import { FooterComponent } from './footer/footer.component';
import { PromotionComponent } from './promotion/promotion.component';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [        
    NavbarComponent,
    SliderComponent,
    ProductComponent,
    SmartphoneComponent,
    LaptopComponent,
    ItemComponent,
    PromotionComponent,
    FooterComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent
  ],
})
export class LayoutModule { }
