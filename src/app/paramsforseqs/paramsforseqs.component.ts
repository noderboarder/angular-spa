import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-paramsforseqs',
  templateUrl: './paramsforseqs.component.html',
  styleUrls: ['./paramsforseqs.component.scss']
})
export class ParamsforseqsComponent implements OnInit {

  seqqueryparametersForm: FormGroup; // step 3: html의 formgroup name과 동일해야한다.

  constructor(private formBuilder: FormBuilder) {
    /*
      // formBuilder는 form을 빌드하는 역할정도 한다.
      this.seqqueryparameters = formBuilder.group(
        {
          startingPosition: new FormControl(),
          endingPosition: new FormControl(),
          maskOptionYn: new FormControl(), // 각각은 elements이며 html의 formControlName에 있는 이름과 같아야함
          maskOption: new FormControl()
        }
      );
     */
    // showing message
    this.seqqueryparametersForm = formBuilder.group({
        startingPosition: ['', Validators.required], // TODO min, bigger than 0, two number comparing validation
        endingPosition: ['', Validators.required], // TODO min, bigger than 0, two number comparing validation
        maskOptionYn: ['', Validators.requiredTrue], // 각각은 elements이며 html의 formControlName에 있는 이름과 같아야함
        maskOption: ['', Validators.required]
      }
    );
  }

  // tslint:disable-next-line:typedef
  defaultSet(){
    // this.seqqueryparametersForm.setValue({
    this.seqqueryparametersForm.patchValue({ // TODO de-activate by setting checkbox
      startingPosition: 0,
      endingPosition: 0
      // maskOptionYn: true,
      // maskOption: 'hard'
    });
  }

  ngOnInit(): void {
    this.defaultSet();
  }

  // tslint:disable-next-line:typedef
  postParamsForSeq() {
    // test
    console.log(this.seqqueryparametersForm);
    // getting the entire values
    console.log(this.seqqueryparametersForm.value);
    // getting individual values
    console.log(this.seqqueryparametersForm.value.startingPosition);
    console.log(this.seqqueryparametersForm.value.endingPosition);
    console.log(this.seqqueryparametersForm.value.maskOptionYn);

    this.resetForm();
    this.seqqueryparametersForm.patchValue({ // TODO de-activate by setting checkbox
      startingPosition: 0,
      endingPosition: 0});
  }

  // tslint:disable-next-line:typedef
  resetForm() {
    this.seqqueryparametersForm.reset();
    this.defaultSet();
  }
}
