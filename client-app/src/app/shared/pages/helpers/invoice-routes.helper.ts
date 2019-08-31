export class InvoiceRoutes {
  static get list() { return 'invoices'; }
  static get createInvoice() { return 'invoices/create'; }
  static updateInvoice(invoiceId: number) {return `invoices/${invoiceId}/edit`}
}