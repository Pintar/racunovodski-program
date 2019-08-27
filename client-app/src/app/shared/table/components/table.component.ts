import { Component, OnInit, Input, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { TableFilter } from '../interfaces/table-filter.interface';
import { TableColumn } from '@swimlane/ngx-datatable/src/types';
import { TableState } from '../models/table-state.model';
import { TablePageEvent } from '../interfaces/table-page-event.interface';
import { TableService } from '../services/table.service';
import { map } from 'rxjs/operators';
import { TableSortEvent } from '../interfaces/table-sort-event.interface';
import { SortPropDir, SortDirection, DatatableComponent } from '@swimlane/ngx-datatable';
import { HttpRequest } from '@angular/common/http';
import { TableQueryResponse } from '../interfaces/table-response.interface';
import * as _ from 'lodash';
import { RequestService } from '../../api-requests/services/request.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  @Input() request: HttpRequest<any>;

  // Optional - if not present labels will match property names
  @Input() columns: Array<TableColumn> = [];

  // Optional
  @Input() set filters(newFilters: TableFilter<string | number | boolean>[]) {
    const oldFilters = this.state.tableRequest.filters;
    const updatedState = this.tableService.changeFilters(this.state, newFilters);

    this.state = updatedState;

    if (!this.state.isInitialized) {
      return;
    }

    if (!_.isEqual(oldFilters, updatedState.tableRequest.filters)) {
      this.setPage(updatedState);
    }
  }

  @Input() defaultSort: SortPropDir = { prop: 'id', dir: SortDirection.desc };

  @Input() tableHeading = '';
  @Input() initialPageSize = 20;
  // Setting this does not make a request to server.
  // Instead applies this data to table state.
  @Input() prefetchedTableResult: TableQueryResponse<any>;

  @ViewChild('table', { static: true }) table: DatatableComponent;

  state: TableState = new TableState();

  constructor(
    private tableService: TableService,
    private endpoints: RequestService
  ) { }

  ngOnInit() {
    this.setup();
  }

  setup() {
    this.state.messages = this.tableService.translateTableMessages();
    const newState = this.tableService.createStartingState(
      this.state,
      this.defaultSort,
      this.initialPageSize);

    if (this.prefetchedTableResult) {
      this.state = this.tableService.createStateFromResponse(newState, this.prefetchedTableResult);
    } else {
      this.state = newState;
      this.setPage(newState);
    }
  }

  setPage(state: TableState) {
    this.endpoints.makeRequest<TableQueryResponse<any>>(
      // we need previous body since we want to preserve request payload generated in initial request.
      // For example date property and so on. Table request data gets overidden every time.
      this.request.clone({ body: { ...this.request.body, ...state.tableRequest } })
    )
      .pipe(
        map((response) => {
          return this.tableService.createStateFromResponse(state, response);
        })
      )
      .subscribe(
        (newState) => { this.state = newState; },
      );
  }

  onPageChangeEvent(page: TablePageEvent) {
    this.state = this.tableService.changeCurrentPage(this.state, page.offset);
    this.setPage(this.state);
  }

  onPageSizeChange(pageSize: number) {
    this.state = this.tableService.changePageSize(this.state, pageSize);
    this.setPage(this.state);
  }

  onSort(sort: TableSortEvent) {
    this.state = this.tableService.setSortToState(this.state, sort);
    this.setPage(this.state);
  }

  toggleExpand(row: any, expandTemplate: TemplateRef<any>) {
    this.table.rowDetail.template = expandTemplate;
    this.table.rowDetail.toggleExpandRow(row);
  }

  get tablePage() {
    return this.state.tableRequest.pageSettings;
  }
}
