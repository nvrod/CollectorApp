import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FormModule } from '../auth/form/form.module';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { SearcherComponent } from './searcher/searcher.component';
 

@NgModule({
  declarations: [
    HomeComponent,
    SideNavbarComponent,
    SearcherComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    FormModule,
  ]
})
export class HomeModule { }