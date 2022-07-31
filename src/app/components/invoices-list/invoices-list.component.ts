import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iinvoice } from 'src/app/interfaces/iinvoice';
import { InvoiceService } from 'src/app/services/invoice.service';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.css']
})
export class InvoicesListComponent implements OnInit {

  invoiceList: Iinvoice[] = []

  @Output()
  edit = new EventEmitter<number>();

  constructor(private _invoiceService: InvoiceService,
    private _saleService: SaleService) {

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

  editInvoice(id: number)
  {
    this.edit.emit(id);
  }

  deleteInvoice(id: number)
  {
    this._saleService.deleteByInvoice(id).subscribe({
      next: () => {
        this._invoiceService.deleteInvoice(id).subscribe({
          next: () => {
            this.getInvoices();
          },
          error: (err: Error) => console.log(err)
        })
      },
      error: (err: Error) => console.log(err)
    });
  }

  toCurrency(price: number)
  {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'COL' });
  }
}
