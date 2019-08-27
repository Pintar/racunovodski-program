import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TableService } from './table.service';
import { TableState } from '../models/table-state.model';
import { TableRequest } from '../interfaces/table-request.interface';
import { TablePage } from '../interfaces/table-page.interface';
import { TableSort } from '../interfaces/table-sort.interface';
import { SortPropDir, SortDirection } from '@swimlane/ngx-datatable/src/types';
import { I18n } from '@ngx-translate/i18n-polyfill';
import { TableFilterOperator } from '../consts/table-filter-operator.const';
import { TableFilter } from '../interfaces/table-filter.interface';

describe('TableService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [
      TableService,
      { provide: I18n, useValue: jasmine.createSpy('translate') }
    ]
  }));

  it('should be created', () => {
    const service: TableService = TestBed.get(TableService);
    expect(service).toBeTruthy();
  });

  it('should create correct state when updating table settings', () => {
    const service: TableService = TestBed.get(TableService);
    const state = new TableState();
    state.loading = true;

    const tableRequest: TableRequest = {
      ...state.tableRequest,
      pageSettings: {
        offset: 2,
        pageSize: 3,
        recordCount: 4
      }
    };

    const result = service.updateTableSettings(state, tableRequest);
    expect(result.loading).toBeTruthy();
    expect(result.tableRequest).toEqual(tableRequest);
    expect(result.tableRequest.sort).toBeDefined();
  });

  it('should create correct state when updating page settings', () => {
    const service: TableService = TestBed.get(TableService);
    const state = new TableState();
    state.loading = true;

    const tablePage: TablePage = {
      offset: 1,
      pageSize: 2,
      recordCount: 3
    };

    const result = service.updatePageSettings(state, tablePage);
    expect(result.loading).toBeTruthy();
    expect(result.tableRequest.pageSettings).toEqual(tablePage);
    expect(result.tableRequest.sort).toBeDefined();
  });

  it('should create correct state when updating state sort', () => {
    const service: TableService = TestBed.get(TableService);
    const state = new TableState();
    state.loading = true;

    const sort: TableSort = {
      descending: true,
      property: 'code'
    };

    const result = service.updateStateSort(state, sort);
    expect(result.loading).toBeTruthy();
    expect(result.tableRequest.pageSettings).toBeDefined();
    expect(result.tableRequest.sort).toEqual(sort);
    expect(result.tableRequest.pageSettings.offset).toEqual(0);
  });

  it('should set initialSort, sort object and pagesize when creating starting state', () => {
    const service: TableService = TestBed.get(TableService);
    const state = new TableState();
    const defaultSort: SortPropDir = { dir: SortDirection.desc, prop: 'aa' };
    const exepectedSort: TableSort = { descending: true, property: 'aa' };

    const result = service.createStartingState(state, defaultSort, 22);

    expect(result.tableRequest.pageSettings.pageSize).toEqual(22);
    expect(result.tableRequest.sort).toEqual(exepectedSort);
    expect(result.initialSort).toEqual(defaultSort);
    expect(result.isInitialized).toBeTruthy();
  });

  it('should update page size', () => {
    const service: TableService = TestBed.get(TableService);
    const state = new TableState();
    state.tableRequest.pageSettings.offset = 1;

    expect(service.changePageSize(state, 5).tableRequest.pageSettings.pageSize)
      .toEqual(5);
    expect(service.changePageSize(state, 5).tableRequest.pageSettings.offset)
      .toEqual(0);
  });

  it('should update offset in pageSettings', () => {
    const service: TableService = TestBed.get(TableService);
    const state = new TableState();

    expect(service.changeCurrentPage(state, 5).tableRequest.pageSettings.offset)
      .toEqual(5);
  });


  it('should update filters in tableSettins', () => {
    const service: TableService = TestBed.get(TableService);
    const state = new TableState();

    const filter: TableFilter<string> = {
      operator: TableFilterOperator.all,
      value: '5',
      property: 'prop',
    };

    expect(service.changeFilters(state, [filter]).tableRequest.filters)
      .toEqual([filter]);
  });

});
