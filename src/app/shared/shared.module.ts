import { ScrollingModule } from '@angular/cdk/scrolling'
import { CommonModule, DatePipe } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberComponent } from './modals/input-number/input-number.component'

const modules = [
  CommonModule,
  ReactiveFormsModule,
  ScrollingModule,
]

@NgModule({
  declarations: [
  ],
  imports: [...modules],
  exports: [...modules],
  providers: [DatePipe]
})
export class SharedModule {}
