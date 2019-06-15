import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SliderComponent } from './layout/slider/slider.component';
import { ProductComponent } from './layout/product/product.component';
import { SmartphoneComponent } from './layout/product/smartphone/smartphone.component';
import { LaptopComponent } from './layout/product/laptop/laptop.component';
import { ItemComponent } from './layout/product/item/item.component';
import { PromotionComponent } from './layout/promotion/promotion.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    SliderComponent,
    ProductComponent,
    SmartphoneComponent,
    LaptopComponent,
    ItemComponent,
    PromotionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
