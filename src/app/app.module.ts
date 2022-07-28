import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientsComponentComponent } from './components/clients-component/clients-component.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { SalesComponentComponent } from './components/sales-component/sales-component.component';
import { InvoicesComponentComponent } from './components/invoices-component/invoices-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponentComponent,
    ProductsComponentComponent,
    SalesComponentComponent,
    InvoicesComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
