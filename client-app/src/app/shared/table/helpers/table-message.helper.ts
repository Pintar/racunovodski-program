export class TableMessage {
  emptyMessage;
  totalMessage;
  selectedMessage;

  constructor(
    emptyMessage = 'Missing translation',
    totalMessage = 'Missing translation',
    selectedMessage = 'Missing translation') {
    this.emptyMessage = emptyMessage;
    this.totalMessage = totalMessage;
    this.selectedMessage = selectedMessage;
  }
}
