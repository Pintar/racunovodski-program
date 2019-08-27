
import { TableRequest } from '../interfaces/table-request.interface';
import { environment } from 'src/environments/environment';
import { tableCssClasses } from '../consts/table-css-classes.const';
import { SortPropDir } from '../../../../../node_modules/@swimlane/ngx-datatable/src/types/sort-prop-dir.type';
import { SortDirection } from '@swimlane/ngx-datatable/src/types';
import { TableMessage } from '../helpers/table-message.helper';

export class TableState {
  isInitialized = false;
  loading = false;
  rows: Array<any> = [];

  messages: TableMessage = new TableMessage();
  cssClasses = tableCssClasses;

  initialSort: SortPropDir = {dir: SortDirection.desc, prop: 'id'};

  tableRequest: TableRequest = {
    filters: [],
    sort: { descending: true, property: 'id' },
    pageSettings: {
      offset: 0,
      pageSize: 20,
      recordCount: 0
    }
  };
}
