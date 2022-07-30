import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClient } from 'src/app/interfaces/iclient';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-invoice-new',
  templateUrl: './invoice-new.component.html',
  styleUrls: ['./invoice-new.component.css']
})
export class InvoiceNewComponent implements OnInit {

  client: IClient = {} as IClient;

  clientForm: FormGroup;

  constructor(private fb: FormBuilder, private _clientService: ClientService) {
    this.client.clientId = "0";
    this.clientForm = fb.group({
      clientId: ["", [Validators.required, Validators.maxLength(10)]]
    });
  }

  ngOnInit(): void {
  }

  searchClient() {
    const id: string = this.clientForm.get("clientId")?.value;

    this._clientService.getClient(id).subscribe({
      next: (client: IClient) => {
        this.client = client;
      },
      error: (err: Error) => {
        console.log(err);
        this.client = {} as IClient;
        this.client.clientId = "0";
      }
    });
  }
}
