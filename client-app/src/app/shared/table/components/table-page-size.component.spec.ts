// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { TablePageSizeComponent } from './table-page-size.component';
// import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
// import { By } from '@angular/platform-browser';

// describe('TablePageSizeComponent', () => {
//   let component: TablePageSizeComponent;
//   let fixture: ComponentFixture<TablePageSizeComponent>;

//   @Component({
//     selector: 'app-input-select',
//     template: ''
//   })
//   class InputSelectMockComponent {
//     @Input() form;
//     @Input() property;
//     @Input() options;
//   }

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//       declarations: [TablePageSizeComponent, InputSelectMockComponent],
//       providers: [FormBuilder]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TablePageSizeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have form defined after ng init', () => {
//     expect(component.form).toBeDefined();
//   });

//   it('should return pagesize form control', () => {
//     expect(component.pageSizeControl).toBeDefined();
//   });

//   it('should return pagesize form property', () => {
//     expect(component.pageSizeFormProperty).toEqual('pageSize');
//   });

//   it('should return pagesize form property', () => {
//     expect(component.pageSizeFormProperty).toEqual('pageSize');
//   });

//   it('should emit pageSize when value changes', () => {
//     spyOn(component.pageSize, 'emit');

//     component.pageSizeControl.setValue('10', { emitEvent: true });

//     fixture.detectChanges();

//     expect(component.pageSize.emit).toHaveBeenCalledWith('10');
//   });

//   it('should remove subscription on destroy', () => {
//     expect(component.subscription.closed).toBeFalsy();
//     component.ngOnDestroy();
//     expect(component.subscription.closed).toBeTruthy();
//   });

//   it('should wire properties correctly to app-input-select', () => {
//     const element = fixture.debugElement;

//     const selectComponent = element.query(By.css('app-input-select'))
//       .injector.get(InputSelectMockComponent);

//     expect(selectComponent.form).toEqual(component.form);
//     expect(selectComponent.property).toEqual(component.pageSizeFormProperty);
//     expect(selectComponent.options).toEqual(component.selectOptions);
//   });
// });
