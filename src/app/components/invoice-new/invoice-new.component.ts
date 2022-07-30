import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-invoice-new',
  templateUrl: './invoice-new.component.html',
  styleUrls: ['./invoice-new.component.css']
})
export class InvoiceNewComponent implements OnInit {

  clientForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.clientForm = fb.group({
      clientId: ["", [Validators.required, Validators.maxLength(10)]]
    });
   }

  ngOnInit(): void {
  }

}
