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
  editId = 0;

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
      pName: ["", [Validators.required, Validators.maxLength(150)]],
      pDescription: ["", Validators.maxLength(250)],
      stock: ["", Validators.required],
      img: ["", [Validators.required, Validators.maxLength(350)]],
      price: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  getProducts() {

  }

  saveProduct() {
    const product: IProduct = {
      productId: 0,
      pName: this.form.get("pName")?.value,
      pDescription: this.form.get("pDescription")?.value,
      stock: this.form.get("stock")?.value,
      img: this.form.get("img")?.value,
      price: this.form.get("price")?.value
    }

    if (this.editMode) {
      //edit product
    }
    else {
      //add product
      this.productList.push(product);
    }
  }

  editProduct(product: IProduct) {
    this.action = "Edit"
    this.editMode = true;
    this.editId = product.productId

    this.form.patchValue(
      {
        pName: product.pName,
        pDescription: product.pDescription,
        stock: product.stock,
        img: product.img,
        price: product.price
      }
    );
  }

  deleteProduct(id: number) {

  }

  cancelEdit() {
    this.action = "Add"
    this.editMode = false;
    this.editId = 0;

    this.form.reset();
  }
}
