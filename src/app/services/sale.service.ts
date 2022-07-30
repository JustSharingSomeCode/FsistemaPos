import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISale } from '../interfaces/isale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  private myAppUrl = environment.appUrl;
  private myApiUrl = "api/Sales/";

  constructor(private http: HttpClient) { }

  getSaleList(): Observable<ISale[]> {
    return this.http.get<ISale[]>(this.myAppUrl + this.myApiUrl);
  }

  deleteSale(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }

  saveSale(sale: ISale): Observable<ISale> {
    return this.http.post<ISale>(this.myAppUrl + this.myApiUrl, sale);
  }
}
