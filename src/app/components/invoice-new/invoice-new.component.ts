import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClient } from 'src/app/interfaces/iclient';
import { Iinvoice } from 'src/app/interfaces/iinvoice';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ISale } from 'src/app/interfaces/isale';
import { ClientService } from 'src/app/services/client.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-invoice-new',
  templateUrl: './invoice-new.component.html',
  styleUrls: ['./invoice-new.component.css']
})
export class InvoiceNewComponent implements OnInit {

  invoice: Iinvoice = {} as Iinvoice;
  client: IClient = {} as IClient;
  productList: IProduct[] = [];
  saleList: ISale[] = [];

  clientForm: FormGroup;
  productForm: FormGroup;
  saleForm: FormGroup;

  subTotal: number = 0;

  selectedProduct: IProduct = {} as IProduct;

  constructor(private fb: FormBuilder,
    private _clientService: ClientService,
    private _productService: ProductService,
    private _saleService: SaleService,
    private _invoiceService: InvoiceService) {

    this.invoice.invoiceId = 0;
    this.client.clientId = "";
    this.selectedProduct.productId = 0;

    this.clientForm = fb.group({
      clientId: ["", [Validators.required, Validators.maxLength(10)]]
    });

    this.productForm = fb.group({
      pName: ["", Validators.maxLength(150)]
    });

    this.saleForm = fb.group({
      quantity: ["", Validators.required],
      unitPrice: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  reset() {
    this.invoice = {} as Iinvoice;
    this.client = {} as IClient;
    this.productList = [];
    this.saleList = [];

    this.invoice.invoiceId = 0;
    this.client.clientId = "";
    this.selectedProduct.productId = 0;

    this.clientForm.reset();
    this.productForm.reset();
    this.saleForm.reset();
  }

  searchClient() {
    const id: string = this.clientForm.get("clientId")?.value;

    if (id == "") {
      return;
    }

    this._clientService.getClient(id).subscribe({
      next: (client: IClient) => {
        this.client = client;
        console.log(client);
      },
      error: (err: Error) => {
        console.log(err);
        this.client = {} as IClient;
        this.client.clientId = "";
        console.log(this.client);
      }
    });
  }

  createInvoice() {
    let date = new DatePipe('en-us').transform(new Date(), 'yyyy-MM-dd')

    const newInvoice: Iinvoice = {
      invoiceId: 0,
      clientIdFk: this.client.clientId,
      total: 0,
      invoiceDate: date == null ? "0000-00-00" : date
    }

    console.log(newInvoice);

    this._invoiceService.saveInvoice(newInvoice).subscribe({
      next: (res: Iinvoice) => {
        this.invoice = res;
      },
      error: (err: Error) => console.log(err)
    });
  }

  discardInvoice() {
    this._saleService.deleteByInvoice(this.invoice.invoiceId).subscribe({
      next: () => {
        this._invoiceService.deleteInvoice(this.invoice.invoiceId).subscribe({
          next: () => {
            this.invoice = {} as Iinvoice;
            this.invoice.invoiceId = 0;
            this.searchProducts();
            this.saleList = []
          },
          error: (err: Error) => console.log(err)
        })
      },
      error: (err: Error) => console.log(err)
    });
  }

  searchProducts() {
    const name: string = this.productForm.get("pName")?.value;

    if (name == "") {
      this._productService.getProductList().subscribe({
        next: (list: IProduct[]) => {
          this.productList = list
        },
        error: (err: Error) => console.log(err)
      });
    }
    else {
      this._productService.getProductsByName(name).subscribe({
        next: (list: IProduct[]) => {
          this.productList = list
        },
        error: (err: Error) => console.log(err)
      });
    }
  }

  selectProduct(product: IProduct) {
    this.saleForm.reset();
    this.selectedProduct = product;

    this.saleForm.patchValue({
      quantity: 1,
      unitPrice: this.selectedProduct.price
    });

    this.updateSubTotal();
  }

  updateSubTotal() {
    const quantity: number = this.saleForm.get("quantity")?.value;
    const unitPrice: number = this.saleForm.get("unitPrice")?.value;

    this.subTotal = quantity * unitPrice;
  }

  toCurrency(price: number) {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'COL' });
  }

  getSales() {
    this._saleService.getInvoiceSales(this.invoice.invoiceId).subscribe({
      next: (list: ISale[]) => {
        this.saleList = list;
      }
    });
  }

  saveSale() {
    const sale: ISale = {} as ISale;
    sale.saleId = 0;
    sale.invoiceIdFk = this.invoice.invoiceId;
    sale.productIdFk = this.selectedProduct.productId;
    sale.quantity = this.saleForm.get("quantity")?.value;
    sale.unitPrice = this.saleForm.get("unitPrice")?.value;
    sale.subTotal = this.subTotal;

    this._saleService.saveSale(sale).subscribe({
      next: () => {
        this.getSales();
        this.searchProducts();
      },
      error: (err: Error) => console.log(err)
    });

    this.selectedProduct = {} as IProduct;
    this.selectedProduct.productId = 0;
    this.saleForm.reset();
  }

  deleteSale(id: number) {
    this._saleService.deleteSale(id).subscribe({
      next: () => {
        this.getSales();
        this.searchProducts();
      },
      error: (err: Error) => console.log(err)
    });
  }
}
