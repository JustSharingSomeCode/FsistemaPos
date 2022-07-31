import { Component, Directive, OnInit, ViewChild } from '@angular/core';
import { InvoicesListComponent } from '../invoices-list/invoices-list.component';

@Component({
  selector: 'app-invoices-component',
  templateUrl: './invoices-component.component.html',
  styleUrls: ['./invoices-component.component.css']
})
export class InvoicesComponentComponent implements OnInit {

  @ViewChild(InvoicesListComponent) private child!: InvoicesListComponent;

  constructor() { }

  ngOnInit(): void {
  }

  updateInvoiceList()
  {
    this.child.getInvoices();
  }

}
