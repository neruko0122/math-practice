import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'

import { PagesRoutingModule } from './pages-routing.module'
import { HeaderComponent } from './shared/header/header.component'
import { PagesComponent } from './pages.component';
import { QuestionComponent } from './question/question.component'


@NgModule({
  declarations: [
    HeaderComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule
  ]
})
export class PagesModule { }
