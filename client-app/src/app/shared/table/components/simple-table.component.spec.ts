import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTableComponent } from './simple-table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { By } from '@angular/platform-browser';
import { TableService } from '../services/table.service';
import { TableMessage } from '../helpers/table-message.helper';

describe('SimpleTableComponent', () => {
  let component: SimpleTableComponent;
  let fixture: ComponentFixture<SimpleTableComponent>;

  const tableServiceMock = {
    translateTableMessages: () => new TableMessage()
  } as Partial<TableService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleTableComponent],
      imports: [NgxDatatableModule],
      providers: [{ provide: TableService, useValue: tableServiceMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    (fixture.debugElement.nativeElement as HTMLElement).remove();
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display records', () => {
    component.rows = [
      { name: 'aljaz' }
    ];

    component.columns = [{ prop: 'name', name: 'ime' }];

    fixture.detectChanges();
    const element = fixture.debugElement;

    const bodyCell = element.query(By.css('.datatable-body-cell-label'));
    const headerCell = element.query(By.css('.datatable-header-cell-label'));

    expect((headerCell.nativeElement as HTMLElement).textContent).toEqual('ime');
    expect((bodyCell.nativeElement as HTMLElement).textContent).toEqual('aljaz');
  });

  it('should emit select event and not set selected array', () => {

    component.rows = [
      { name: 'aljaz' }
    ];

    component.columns = [{ prop: 'name', name: 'ime' }];

    fixture.detectChanges();
    const element = fixture.debugElement;

    const bodyCell = element.query(By.css('.datatable-body-cell-label'));

    spyOn(component.selectRow, 'emit');

    (bodyCell.nativeElement as HTMLElement).click();

    fixture.detectChanges();
    expect(component.selectRow.emit).toHaveBeenCalledWith(component.rows[0]);
    expect(component.selected.length).toEqual(0);
  });

  it('should return false on select row since its a check function for ngxdatable', () => {
    expect(component.onSelectRow({})).toBeFalsy();
  });

  it('should translate table messages on init', () => {
    const service: TableService = TestBed.get(TableService);
    spyOn(service, 'translateTableMessages');

    component.ngOnInit();

    expect(service.translateTableMessages).toHaveBeenCalled();
  });
});
