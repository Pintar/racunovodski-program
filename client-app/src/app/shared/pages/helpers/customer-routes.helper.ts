export class CustomerRoutes {
  static get list() { return 'customers'; }
  static get createCustomer() { return 'customers/create'; }
  static updateCustomer(customerId: number) { return `customers/${customerId}/edit` }
}