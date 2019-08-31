import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fakeBackendProvider } from '../interceptors/main-fake.interceptor';



@NgModule({
  declarations: [],
  providers: [
    fakeBackendProvider
  ],
  imports: [
    CommonModule
  ]
})
export class DebugModule { }
