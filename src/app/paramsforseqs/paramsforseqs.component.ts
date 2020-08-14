import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-paramsforseqs',
  templateUrl: './paramsforseqs.component.html',
  styleUrls: ['./paramsforseqs.component.scss']
})
export class ParamsforseqsComponent implements OnInit {

  seqqueryparameters: FormGroup; // step 3: html의 formgroup name과 동일해야한다.

  constructor(private formBuilder: FormBuilder) {
      // formBuilder는 form을 빌드하는 역할정도 한다.
      this.seqqueryparameters = formBuilder.group({
          maskOptionYn: new FormControl(), // 각각은 elements이며 html의 formControlName에 있는 이름과 같아야함
          maskOption: new FormControl()
        }
      );
  }

  ngOnInit(): void {
  }

  postParamsForSeq() {
    console.log(this.seqqueryparameters);
    console.log(this.seqqueryparameters.value);
    console.log(this.seqqueryparameters.value.maskOptionYn);
  }
}
