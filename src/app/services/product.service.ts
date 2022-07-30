import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl = environment.appUrl;
  private myApiUrl = "api/Products/";

  constructor(private http: HttpClient) { }

  getProductList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.myAppUrl + this.myApiUrl);
  }

  getProductsByName(name: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.myAppUrl + this.myApiUrl + "by_name/" + name);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }

  saveProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.myAppUrl + this.myApiUrl, product);
  }

  updateProduct(id: number, product: IProduct): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, product);
  }
}
