import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-clients-component',
  templateUrl: './clients-component.component.html',
  styleUrls: ['./clients-component.component.css']
})
export class ClientsComponentComponent implements OnInit {

  action = "Add"
  editMode = false;
  editId = "";

  clientList: Client[] = [
    new Client("1003568324", "Oscar Diaz", "3114993389", "Direccion de residencia"),
    new Client("1000008324", "Andres Bejarano", "351456798", "Direccion de residencia")
  ]
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      clientId: ["", [Validators.required, Validators.maxLength(10)]],
      c_name: ["", [Validators.required, Validators.maxLength(100)]],
      phone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      c_address: ["", [Validators.required, Validators.maxLength(50)]],
    });
  }

  ngOnInit(): void {
  }

  saveClient() {
    const client: Client = new Client(
      this.form.get("clientId")?.value,
      this.form.get("c_name")?.value,
      this.form.get("phone")?.value,
      this.form.get("c_address")?.value
    );

    if (this.editMode) {
      //edit client
    }
    else {
      //add client
      this.clientList.push(client);
    }
  }

  editClient(client: Client) {
    this.action = "Edit"
    this.editMode = true;
    this.editId = client.getId();

    this.form.patchValue(
      {
        clientId: client.getId(),
        c_name: client.getName(),
        phone: client.getPhone(),
        c_address: client.getAddress(),
      }
    );
  }

  deleteClient(id: number) {
    this.clientList.splice(id, 1);
  }

  cancelEdit() {
    this.action = "Add"
    this.editMode = false;
    this.editId = "";

    this.form.reset();
  }

}
