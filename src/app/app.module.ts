import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabViewModule } from 'primeng/tabview';
import {DividerModule} from 'primeng/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandinghomeComponent } from './home/landinghome/landinghome.component';
import { FooterComponent } from './footer/footer.component';
import { VaccinationcountComponent } from './home/vaccinationcount/vaccinationcount.component';
import { SearchvaccinationpointComponent } from './home/searchvaccinationpoint/searchvaccinationpoint.component';
import { WhatsnewComponent } from './home/whatsnew/whatsnew.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandinghomeComponent,
    FooterComponent,
    VaccinationcountComponent,
    SearchvaccinationpointComponent,
    WhatsnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
