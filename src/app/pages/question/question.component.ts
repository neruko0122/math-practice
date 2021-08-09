import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {
  answer1!: string
  answer2!: string
  answer3!: string
  answer4!: string
  question!: string
  imageUrl!: string
  isSelective = false
  hintFlag = false
  onDestroy$ = new Subject()

  constructor(
    private router: Router,
    private fb: FormBuilder,
    // private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    // this.spinner.hide()
    this.buildForm()
  }

  ngOnDestroy() {
    this.onDestroy$.next()
    this.onDestroy$.complete()
  }

  private buildForm(): void {
  }

  register(answer: string) {

  }

  dispHint() {

  }

  reload() {

  }

}
