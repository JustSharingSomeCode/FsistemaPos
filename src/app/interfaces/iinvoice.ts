export interface Iinvoice {
    invoiceId: number;
    clientId_fk: string;
    total: number;
    invoice_date: Date;
}
