import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableColumn, ClickType } from '@swimlane/ngx-datatable/src/types';
import * as _ from 'lodash';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { TableMessage } from '../helpers/table-message.helper';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html'
})
export class SimpleTableComponent implements OnInit {

  @Input() columns: Array<TableColumn> = [];
  // any because we do not know and dont need to know type of rows.
  @Input() rows: Array<any> = [];
  @Input() selected: Array<any> = [];

  @Input() columnMode: ColumnMode = ColumnMode.force;

  // emits selected row
  @Output() selectRow = new EventEmitter<any>();

  selectionType = ClickType.single;

  public tableMessages = new TableMessage();

  constructor(
    private tableService: TableService,
  ) {
  }

  ngOnInit() {
    this.tableMessages = this.tableService.translateTableMessages();
  }

  // This is a check function if we can select a row.
  // Intention is to not auto select on click but rather decide on upper level.
  onSelectRow(selection: any) {
    this.selectRow.emit(selection);
    return false;
  }

  rowIdentity(row: any) {
    return row.id;
  }

  get selectRowFunction() {
    return _.bind(this.onSelectRow, this);
  }
}
