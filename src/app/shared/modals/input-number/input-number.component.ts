import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
