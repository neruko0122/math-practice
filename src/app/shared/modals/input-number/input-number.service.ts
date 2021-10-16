import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { InputNumberComponent } from './input-number.component';

@Injectable({
  providedIn: 'root'
})
export class InputNumberService {

  private bsModalRef!: BsModalRef

  constructor(private modalService: BsModalService) {}

  openInputNumberModal() {
    return this.openModal()
  }

  private openModal(): Subject<boolean> {
    this.bsModalRef = this.modalService.show(InputNumberComponent, {
      initialState: {},
      class: 'modal-lg',
    })

    return this.bsModalRef.content.result
  }
}
