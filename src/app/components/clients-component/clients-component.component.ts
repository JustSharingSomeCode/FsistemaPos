import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IClient } from 'src/app/interfaces/iclient';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients-component',
  templateUrl: './clients-component.component.html',
  styleUrls: ['./clients-component.component.css']
})
export class ClientsComponentComponent implements OnInit {

  action = "Add"
  editMode = false;
  editId = "";

  clientList: IClient[] = []

  form: FormGroup;

  constructor(private fb: FormBuilder, private _clientService: ClientService) {
    this.form = fb.group({
      clientId: ["", [Validators.required, Validators.maxLength(10)]],
      c_name: ["", [Validators.required, Validators.maxLength(100)]],
      phone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      c_address: ["", [Validators.required, Validators.maxLength(50)]],
    });
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this._clientService.getClientList().subscribe({
      next: (data: IClient[]) => {
        this.clientList = data;
      },
      error: (err: Error) => console.log(err)
    });
  }

  saveClient() {
    const client: IClient = {
      clientId: this.form.get("clientId")?.value,
      cName: this.form.get("c_name")?.value,
      phone: this.form.get("phone")?.value,
      cAddress: this.form.get("c_address")?.value
    };

    if (this.editMode) {
      //edit client
      this._clientService.updateClient(this.editId, client).subscribe({
        next: () => {
          this.cancelEdit();
          this.getClients();
        },
        error: (err: Error) => console.log(err)
      });
    }
    else {
      //add client
      this._clientService.saveClient(client).subscribe({
        next: () => {
          this.form.reset();
          this.getClients();
        },
        error: (err: Error) => console.log(err)
      });
    }
  }

  editClient(client: IClient) {
    this.action = "Edit"
    this.editMode = true;
    this.editId = client.clientId

    this.form.patchValue(
      {
        clientId: client.clientId,
        c_name: client.cName,
        phone: client.phone,
        c_address: client.cAddress,
      }
    );
  }

  deleteClient(id: string) {
    this._clientService.deleteClient(id).subscribe({
      next: () => {
        this.getClients();
      },
      error: (err: Error) => console.log(err)
    });
  }

  cancelEdit() {
    this.action = "Add"
    this.editMode = false;
    this.editId = "";

    this.form.reset();
  }

}
