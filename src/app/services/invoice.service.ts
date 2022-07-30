import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iinvoice } from '../interfaces/iinvoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private myAppUrl = environment.appUrl;
  private myApiUrl = "api/Invoices/";

  constructor(private http: HttpClient) { }

  getInvoiceList(): Observable<Iinvoice[]> {
    return this.http.get<Iinvoice[]>(this.myAppUrl + this.myApiUrl);
  }

  deleteInvoice(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }

  saveInvoice(invoice: Iinvoice): Observable<Iinvoice> {
    return this.http.post<Iinvoice>(this.myAppUrl + this.myApiUrl, invoice);
  }
}
