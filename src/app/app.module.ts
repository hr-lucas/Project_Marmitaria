import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { PackageComponent } from './package/package.component';
import { PackageListComponent } from './package/package-list/package-list.component';
import { PackageDetailsComponent } from './package/package-details/package-details.component';
import { PackageItemComponent } from './package/package-list/package-item/package-item.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-list/food-edit/food-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackageComponent,
    PackageListComponent,
    PackageDetailsComponent,
    PackageItemComponent,
    FoodListComponent,
    FoodEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
