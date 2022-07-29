import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients-component',
  templateUrl: './clients-component.component.html',
  styleUrls: ['./clients-component.component.css']
})
export class ClientsComponentComponent implements OnInit {

  clientList: any[] = [
    { c_name: "Oscar Diaz", phone: "3114993389", c_address: "Direccion de residencia" },
    { c_name: "Andres Bejarano", phone: "351456798", c_address: "Direccion de residencia" }
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
