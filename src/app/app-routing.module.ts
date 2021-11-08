import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';
import {DividerModule} from 'primeng/divider';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandinghomeComponent } from './home/landinghome/landinghome.component';
import { VaccinationcountComponent } from './home/vaccinationcount/vaccinationcount.component';
import { SearchvaccinationpointComponent } from './home/searchvaccinationpoint/searchvaccinationpoint.component';
import { WhatsnewComponent } from './home/whatsnew/whatsnew.component';

const routes: Routes = [
  {path:'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'landinghome', component:LandinghomeComponent},
  {path:'vaccinationcount', component:VaccinationcountComponent},
  {path:'searchvaccinationpoint', component:SearchvaccinationpointComponent},
  {path:'whatsnew', component:WhatsnewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
