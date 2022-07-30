export interface ISale {
    saleId: number;
    invoiceId_fk: number;
    productId_fk: number;
    quantity: number;
    unit_price: number;
    sub_total: number;
}
