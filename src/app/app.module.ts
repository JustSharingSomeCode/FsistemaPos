import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClientsComponentComponent } from './components/clients-component/clients-component.component';
import { ProductsComponentComponent } from './components/products-component/products-component.component';
import { SalesComponentComponent } from './components/sales-component/sales-component.component';
import { InvoicesComponentComponent } from './components/invoices-component/invoices-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { InvoiceNewComponent } from './components/invoice-new/invoice-new.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponentComponent,
    ProductsComponentComponent,
    SalesComponentComponent,
    InvoicesComponentComponent,
    InvoicesListComponent,
    InvoiceNewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
