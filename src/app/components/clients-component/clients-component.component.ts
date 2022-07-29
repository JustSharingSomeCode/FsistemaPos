import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-clients-component',
  templateUrl: './clients-component.component.html',
  styleUrls: ['./clients-component.component.css']
})
export class ClientsComponentComponent implements OnInit {

  clientList: Client[] = [
    new Client("1003568324", "Oscar Diaz", "3114993389", "Direccion de residencia"),
    new Client("1000008324", "Andres Bejarano", "351456798", "Direccion de residencia")
  ]
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      c_name: ["", [Validators.required, Validators.maxLength(100)]],
      phone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      c_address: ["", [Validators.required, Validators.maxLength(50)]],
    });
   }

  ngOnInit(): void {
  }

}
