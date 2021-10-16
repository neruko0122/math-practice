import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal'
import { InputNumberComponent } from './input-number.component';
import { InputNumberService } from './input-number.service';



@NgModule({
  declarations: [InputNumberComponent],
  imports: [CommonModule, ModalModule.forRoot()],
  providers: [InputNumberService],
  entryComponents: [InputNumberComponent]
})
export class InputNumberModule { }
