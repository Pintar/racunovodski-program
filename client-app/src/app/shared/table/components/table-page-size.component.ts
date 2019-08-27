// import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
// import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
// import { nameOfFactory } from '../../utils/consts/nameOfFactory.const';
// import { TablePageSizeForm } from '../interfaces/table-page-size.interface';
// import { Subscription } from 'rxjs';
// import { Codelist } from '../../interfaces/codelist.interface';

// @Component({
//   selector: 'app-table-page-size',
//   templateUrl: './table-page-size.component.html'
// })
// export class TablePageSizeComponent implements OnInit, OnDestroy {

//   @Input() set hostPageSize(size: string) {
//     this.pageSizeControl.setValue(size);
//   }

//   @Output() pageSize = new EventEmitter<number>();

//   form: FormGroup;
//   nameOf = nameOfFactory<TablePageSizeForm>();

//   selectOptions: Array<Codelist<number>> = [
//     { value: 5, id: '5' },
//     { value: 10, id: '10' },
//     { value: 20, id: '20' },
//     { value: 50, id: '50' },
//     { value: 75, id: '75' },
//     { value: 100, id: '100' },
//   ];

//   subscription: Subscription;

//   constructor(private formBuilder: FormBuilder) {
//     this.form = this.formBuilder.group({
//       pageSize: ['']
//     });
//   }

//   get pageSizeControl(): FormControl {
//     return this.form.get(this.nameOf('pageSize')) as FormControl;
//   }

//   get pageSizeFormProperty() {
//     return this.nameOf('pageSize');
//   }

//   ngOnInit() {
//     this.subscription = this.pageSizeControl.valueChanges.subscribe(
//       (newValue) => this.onPageSizeChange(newValue));
//   }

//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }

//   onPageSizeChange(newValue: number) {
//     this.pageSize.emit(newValue);
//   }

// }
