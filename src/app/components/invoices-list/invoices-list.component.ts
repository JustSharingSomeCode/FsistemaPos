import { Component, OnInit } from '@angular/core';
import { Iinvoice } from 'src/app/interfaces/iinvoice';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {

  invoiceList: Iinvoice[] = []

  constructor(private _invoiceService: InvoiceService) {

   }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices()
  {
    this._invoiceService.getInvoiceList().subscribe({
      next: (list: Iinvoice[]) => {
        this.invoiceList = list;
        console.log(list);
      },
      error: (err: Error) => console.log(err)
    });
  }

  editInvoice(invoice: Iinvoice)
  {

  }

  deleteInvoice(id: number)
  {

  }

  toCurrency(price: number)
  {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'COL' });
  }
}
