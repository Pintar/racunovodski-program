import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TableService } from '../services/table.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { HttpRequest } from '@angular/common/http';
import { of } from 'rxjs';
import { TableQueryResponse } from '../interfaces/table-response.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { TableMessage } from '../helpers/table-message.helper';
import { TableState } from '../models/table-state.model';
import { TableFilterOperator } from '../consts/table-filter-operator.const';
import { MockRender } from 'ng-mocks';
import { RequestService } from '../../api-requests/services/request.service';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let endpointServiceStub;

  const filter = {
    operator: TableFilterOperator.all,
    property: 'prop',
    value: 'neki'
  };

  @Component({
    selector: 'app-table-page-size',
    template: ''
  })
  class TablePageSizeMockComponent {
    @Input() hostPageSize;
    @Output() pageSize = new EventEmitter<any>();
  }

  const mockMakeRequest = (body) => {
    endpointServiceStub.makeRequest.and.returnValue(
      of(body)
    );
  };

  const tableServiceMock = {
    createStateFromResponse: () => null,
    updatePageSettings: () => null,
    updateTableSettings: () => null,
    updateStateSort: () => null,
    createStartingState: () => null,
    translateTableMessages: () => new TableMessage(),
    changeFilters: () => null,
  } as Partial<TableService>;

  const requestServiceMock = {
    makeRequest: () => of(null)
  } as Partial<RequestService>;

  beforeEach(async(() => {
    endpointServiceStub = jasmine.createSpyObj('endpointService', ['makeRequest']);

    TestBed.configureTestingModule({
      declarations: [TableComponent, TablePageSizeMockComponent],
      imports: [NgxDatatableModule, HttpClientTestingModule],
      providers: [
        TableService,
        { provide: RequestService, useValue: requestServiceMock },
        { provide: TableService, useValue: tableServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    spyOn(component, 'ngOnInit');
    component.request = new HttpRequest<any>('GET', '');
  });

  afterEach(() => {
    (fixture.debugElement.nativeElement as HTMLElement).remove();
    fixture.destroy();
  });

  it('should create', () => {
    mockMakeRequest({ results: [] } as TableQueryResponse<any>);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should display records', () => {
    component.state.rows = [
      { name: 'aljaz' }
    ];

    mockMakeRequest({
      results: component.state.rows,
      recordCount: 1,
      offset: 0,
      pageSize: 10
    } as TableQueryResponse<any>);

    component.columns = [{ prop: 'name', name: 'ime' }];
    component.tablePage.recordCount = 1;

    fixture.detectChanges();
    const element = fixture.debugElement;

    const bodyCell = element.query(By.css('.datatable-body-cell-label'));
    const headerCell = element.query(By.css('.datatable-header-cell-label'));

    expect((headerCell.nativeElement as HTMLElement).textContent).toEqual('ime');
    expect((bodyCell.nativeElement as HTMLElement).textContent).toEqual('aljaz');
  });

  it('should call createStateFromResponse and not setPage when we have prefetchedTableResult set on setup call', () => {
    const tableService: TableService = TestBed.get(TableService);

    component.prefetchedTableResult = { results: [], offset: 0, recordCount: 1, pageSize: 2 };

    spyOn(component, 'setPage');
    spyOn(tableService, 'createStateFromResponse');

    component.setup();

    expect(component.setPage).not.toHaveBeenCalled();
    expect(tableService.createStateFromResponse).toHaveBeenCalled();
  });

  it('should call setPage and not createStateFromResponse when we dont have prefetchedTableResult set on setup call', () => {
    const tableService: TableService = TestBed.get(TableService);
    const tableState = new TableState();
    tableState.isInitialized = true;

    spyOn(component, 'setPage');
    spyOn(tableService, 'createStateFromResponse');
    spyOn(tableService, 'createStartingState').and.returnValue(tableState);

    component.setup();

    expect(component.setPage).toHaveBeenCalled();
    expect(tableService.createStateFromResponse).not.toHaveBeenCalled();
    expect(component.state.isInitialized).toBeTruthy();
  });

  it('should translate table messages on setup', () => {
    const tableService: TableService = TestBed.get(TableService);

    spyOn(tableService, 'translateTableMessages');
    spyOn(component, 'setPage');
    spyOn(tableService, 'createStateFromResponse');

    component.setup();

    expect(tableService.translateTableMessages).toHaveBeenCalled();
  });


  it('should call setpage if setting different filters', () => {
    component.state.tableRequest.filters = [
      filter
    ];
    const tableService: TableService = TestBed.get(TableService);
    const newFilter = _.clone(filter);
    newFilter.property = 'newProperty';
    const updatedState = new TableState();
    updatedState.isInitialized = true;

    updatedState.tableRequest.filters = [
      newFilter
    ];

    spyOn(tableService, 'changeFilters').and.returnValue(updatedState);
    spyOn(component, 'setPage');

    component.filters = updatedState.tableRequest.filters;

    expect(component.setPage).toHaveBeenCalledWith(updatedState);
  });

  it('should not call setpage if setting same filters', () => {
    component.state.tableRequest.filters = [
      filter
    ];
    const tableService: TableService = TestBed.get(TableService);
    const updatedState = new TableState();
    updatedState.isInitialized = true;

    updatedState.tableRequest.filters = [
      filter
    ];

    spyOn(tableService, 'changeFilters').and.returnValue(updatedState);
    spyOn(component, 'setPage');

    component.filters = updatedState.tableRequest.filters;

    expect(component.setPage).not.toHaveBeenCalled();
  });

  it('should only set filter state and not call setpage if setting different filters', () => {
    component.state.tableRequest.filters = [
      filter
    ];
    const tableService: TableService = TestBed.get(TableService);
    const newFilter = _.clone(filter);
    newFilter.property = 'newProperty';
    const updatedState = new TableState();
    updatedState.isInitialized = false;

    updatedState.tableRequest.filters = [
      newFilter
    ];

    spyOn(tableService, 'changeFilters').and.returnValue(updatedState);
    spyOn(component, 'setPage');

    component.filters = updatedState.tableRequest.filters;

    expect(component.state).toEqual(updatedState);
    expect(component.setPage).not.toHaveBeenCalled();
  });
  // TODO: check why this fails?!
  // it('should set expand template and toggle row on toggle expand action', () => {
  //   const row = {};
  //   const template = MockRender('<ng-template></ng-template>');
  //   spyOn(component.table.rowDetail, 'toggleExpandRow');

  //   component.toggleExpand(row, template as any);

  //   expect(component.table.rowDetail.template).toEqual(template as any);
  //   expect(component.table.rowDetail.toggleExpandRow).toHaveBeenCalled();
  // });
});
