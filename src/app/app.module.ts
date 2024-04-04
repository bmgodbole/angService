import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildCComponent } from './child-c/child-c.component';
import { ParentCComponent } from './parent-c/parent-c.component';
import { BookseatComponent } from './bookseat/bookseat.component';
import {CntServiceService} from './cnt-service.service'
@NgModule({
  declarations: [
    AppComponent,
    ChildCComponent,
    ParentCComponent,
    BookseatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CntServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
