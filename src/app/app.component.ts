import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FsistemaPos';

  divClients:boolean = false;
  divProducts:boolean = false;
  divSales:boolean = false;
  divInvoices:boolean = true;

  hideAll()
  {
    this.divClients = false;
    this.divProducts = false;
    this.divSales = false;
    this.divInvoices = false;
  }

  showClients()
  {
    this.hideAll();
    this.divClients = true;
  }

  showProducts()
  {
    this.hideAll();
    this.divProducts = true;
  }

  showSales()
  {
    this.hideAll();
    this.divSales = true;
  }

  showInvoices()
  {
    this.hideAll();
    this.divInvoices = true;
  }
}

