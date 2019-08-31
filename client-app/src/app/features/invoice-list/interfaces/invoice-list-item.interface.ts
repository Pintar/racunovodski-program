export interface InvoiceListItem {
    dueDate: string;
    invoiceDate: string;
    invoiceNumber: string;
    customerName: string;
    currency: string;
    vat: number;
    priceTotal: number;
    description: string;
}