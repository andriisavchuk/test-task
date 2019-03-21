import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ListsService } from './list/list.service';
import { DisplayButtonsDirective } from './list/display-buttons.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DisplayButtonsDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
