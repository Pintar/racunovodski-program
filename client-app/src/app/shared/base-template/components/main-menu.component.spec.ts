import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuComponent } from './main-menu.component';
import { I18n } from '@ngx-translate/i18n-polyfill';
import { MockComponent } from 'ng-mocks';
import { NbMenuComponent } from '@nebular/theme';



describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainMenuComponent,
        MockComponent(NbMenuComponent),
      ],
      providers: [{
        provide: I18n, useValue: jasmine.createSpy('translate')
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
