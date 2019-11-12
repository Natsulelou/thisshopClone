import { Component } from '@angular/core';
import { FormGroup ,Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  gender: any;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thridFormGroup: FormGroup;
  constructor(private build: FormBuilder) {}
  ngOnInit() {
    this.firstFormGroup = this.build.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.build.group({
      secondCtrl: ['', Validators.required]
    });
    this.thridFormGroup = this.build.group({
      thridCtrl: ['', Validators.required]
    });
  }

  onclickCheck(){
    console.log(this.gender)
  }
}
