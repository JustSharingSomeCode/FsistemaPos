import { IProduct } from "./iproduct";

export interface ISale {
    saleId: number;
    invoiceIdFk: number;
    productIdFk: number;
    quantity: number;
    unitPrice: number;
    subTotal: number;
    product: IProduct;
}
