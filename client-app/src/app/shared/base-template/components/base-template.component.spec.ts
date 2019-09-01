import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';
import { BaseTemplateComponent } from './base-template.component';
import { RouterOutlet } from '@angular/router';
import { NbLayoutComponent, NbSidebarComponent, NbLayoutHeaderComponent, NbLayoutColumnComponent, NbCardBodyComponent, NbCardComponent } from '@nebular/theme';
import { MainMenuComponent } from './main-menu.component';

describe('BaseTemplateComponent', () => {
  let component: BaseTemplateComponent;
  let fixture: ComponentFixture<BaseTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BaseTemplateComponent,
        MockComponent(RouterOutlet),
        MockComponent(NbLayoutComponent),
        MockComponent(NbSidebarComponent),
        MockComponent(NbLayoutHeaderComponent),
        MockComponent(NbLayoutColumnComponent),
        MockComponent(NbCardBodyComponent),
        MockComponent(NbCardComponent),
        MockComponent(MainMenuComponent),
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
