import { Component, Directive, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InvoiceNewComponent } from '../invoice-new/invoice-new.component';
import { InvoicesListComponent } from '../invoices-list/invoices-list.component';

@Component({
  selector: 'app-invoices-component',
  templateUrl: './invoices-component.component.html',
  styleUrls: ['./invoices-component.component.css']
})
export class InvoicesComponentComponent implements OnInit {

  @ViewChild(InvoicesListComponent) private invoiceList!: InvoicesListComponent;
  @ViewChild(InvoiceNewComponent) private invoiceNew!: InvoiceNewComponent;

  @ViewChild('newTab') tabNewBtn!: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

  updateInvoiceList()
  {
    this.invoiceList.getInvoices();
  }

  editInvoice(id: number)
  {
    this.invoiceNew.loadInvoice(id);
    this.tabNewBtn.nativeElement.click();
  }

}
