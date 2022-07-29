import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

  action = "Add"
  editMode = false;
  editId = "";

  productList: IProduct[] = [
    {
      productId: 1,
      pName: "Lapiz norma",
      pDescription: "Lapiz negro b2 amarillo",
      stock: 15,
      img: "https://d2d21jw8en5l3a.cloudfront.net/vendty2_db_39174_mari2020/imagenes_productos/327_lpiz_de_grafito_hb_n2_negro_norma_imagen.jpeg",
      price: 2500
    },
    {
      productId: 2,
      pName: "Resma blanca",
      pDescription: "",
      stock: 20,
      img: "https://http2.mlstatic.com/D_NQ_NP_811560-MCO41309377802_042020-O.jpg",
      price: 12000
    }
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      pName: ["",[Validators.required, Validators.maxLength(150)]],
      pDescription: ["", [Validators.required, Validators.maxLength(250)]],
      stock: ["", Validators.required],
      img: ["", [Validators.required, Validators.maxLength(350)]],
      price: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getProducts()
  {

  }

  saveProduct()
  {

  }

  editProduct()
  {

  }

  deleteProduct()
  {

  }

  cancelEdit()
  {

  }
}
