import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandinghomeComponent } from './landinghome/landinghome.component';
import { VaccinationcountComponent } from './vaccinationcount/vaccinationcount.component';
import { SearchvaccinationpointComponent } from './searchvaccinationpoint/searchvaccinationpoint.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';



@NgModule({
  declarations: [
    LandinghomeComponent,
    VaccinationcountComponent,
    SearchvaccinationpointComponent,
    WhatsnewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
