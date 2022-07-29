import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from '../interfaces/iclient';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private myAppUrl = "https://localhost:7044/";
  private myApiUrl = "api/Clients/";

  constructor(private http: HttpClient) { }

  getClientList(): Observable<IClient[]> {
    return this.http.get<IClient[]>(this.myAppUrl + this.myApiUrl);
  }

  deleteClient(id: string): Observable<any> {
    return this.http.delete(this.myAppUrl + this.myApiUrl + id)
  }

  saveClient(client: IClient): Observable<IClient> {
    return this.http.post<IClient>(this.myAppUrl + this.myApiUrl, client);
  }

  updateClient(id: string, client: IClient): Observable<any> {
    return this.http.put(this.myAppUrl + this.myApiUrl + id, client);
  }
}
