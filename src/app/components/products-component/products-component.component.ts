import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/iproduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

  action = "Add"
  editMode = false;
  editId = 0;

  productList: IProduct[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder, private _productService: ProductService) {
    this.form = fb.group({
      pName: ["", [Validators.required, Validators.maxLength(150)]],
      pDescription: ["", [Validators.required, Validators.maxLength(250)]],
      stock: ["", Validators.required],
      img: ["", [Validators.required, Validators.maxLength(350)]],
      price: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this._productService.getProductList().subscribe({
      next: (data: IProduct[]) => {
        this.productList = data;
      },
      error: (err: Error) => console.log(err)
    });
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

    console.log(product);

    if (this.editMode) {
      //edit product
      product.productId = this.editId;
      this._productService.updateProduct(this.editId, product).subscribe({
        next: () => {
          this.cancelEdit();
          this.getProducts();
        },
        error: (err: Error) => console.log(err)
      });
    }
    else {
      //add product
      this._productService.saveProduct(product).subscribe({
        next: () => {
          this.form.reset();
          this.getProducts();
        },
        error: (err: Error) => console.log(err)
      });
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
    this._productService.deleteProduct(id).subscribe({
      next: () => {
        this.cancelEdit();
        this.getProducts();
      },
      error: (err: Error) => console.log(err)
    });
  }

  cancelEdit() {
    this.action = "Add"
    this.editMode = false;
    this.editId = 0;

    this.form.reset();
  }

  toCurrency(price: number)
  {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'COL' });
  }
}
