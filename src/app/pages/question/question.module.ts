import { QuestionComponent } from './question.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [QuestionComponent],
  imports: [
    QuestionRoutingModule,
    SharedModule
  ]
})
export class QuestionModule { }
