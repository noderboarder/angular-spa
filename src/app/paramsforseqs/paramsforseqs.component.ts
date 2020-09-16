import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import {SequencesService} from '../sequences.service';

@Component({
  selector: 'app-paramsforseqs',
  templateUrl: './paramsforseqs.component.html',
  styleUrls: ['./paramsforseqs.component.scss']
})
export class ParamsforseqsComponent implements OnInit {

  // sequenceList = [];
  // httpclient call
  sequenceList: any;

  // post response initializing
  responseTrue = false;

  seqqueryparametersForm: FormGroup; // step 3: html의 formgroup name과 동일해야한다.
  siteName = 'ensembl';
  startingPosCoord = 0;
  endingPosCoord = 0;
  spacing = 1000;
  threshold = 100;
  // variants;

  constructor(private formBuilder: FormBuilder, public sequencesService: SequencesService){
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
        siteName: ['', [Validators.required,
                        Validators.minLength(10),
                        Validators.minLength(5)]],
        startingPosition: ['', Validators.required], // TODO min, bigger than 0, two number comparing validation
        endingPosition: ['', Validators.required], // TODO min, bigger than 0, two number comparing validation
        maskOptionYn: ['', Validators.requiredTrue], // 각각은 elements이며 html의 formControlName에 있는 이름과 같아야함
        maskOption: ['', Validators.required],
        spacing: ['', Validators.required],
        threshold: ['', Validators.required],
      // 실험1 : 보통은 이렇게 사용한다. array - group - control 여러개
      // group안에 또 formbuilder를 넣어서 거기에 array로 또 만든다.(array는 단지, control과 group의 묶음이다)
      variants: this.formBuilder.array([
        this.formBuilder.group({
          variantId: ['1_345345_A_AT'],
          variantType: ['INS'],
          variantRegion: ['intergenic'],
          variantDescription: ['test variant'],
          variantCheck: ['', Validators.requiredTrue]
        })
        // 보통은 이렇게 multiple group으로 in array에 생성
        // ,this.formBuilder.group({
        //   geneId: ['1_345345_A_AT'],
        //   geneType: ['INS'],
        //   geneRegion: ['intergenic'],
        //   geneDescription: ['test variant'],
        //   geneCheck: ['', Validators.requiredTrue]
        // })
      ])
      // 실험2
      //   variants: this.formBuilder.array([
      //     // 단순 formControl로 이루어진 array : 보통은 드물다. (이거 화면에서 for문 돌리면 됨)
      //     new FormControl('variantId'),
      //     new FormControl('variantType'),
      //     new FormControl('variantRegion')
      //   ])
      }
    );
  }

  // tslint:disable-next-line:typedef
  defaultSet(){
    this.seqqueryparametersForm.setValue({
    // this.seqqueryparametersForm.patchValue({ // TODO de-activate by setting checkbox
      siteName: 'ensembl',
      startingPosition: 0,
      endingPosition: 0,
      spacing: 1000,
      threshold: 100,
      variantType: 'intergenic',
      maskOptionYn: true,
      // maskOption: 'hard'
    });
  }

  ngOnInit(): void {

    // hard coded data
    // this.sequenceList = this.sequencesService.getSequences();

    // using httpclient module
    this.sequencesService.getSequences().subscribe(data => {
      this.sequenceList = data;
    });

    // nested array 접근 (값, 길이, 세부항목)
    console.log(this.seqqueryparametersForm.get('variants').value);
    console.log(this.seqqueryparametersForm.get('variants').value.length);
    console.log(this.seqqueryparametersForm.get('variants').value[0].variantDescription);
    // 초기화 [] 배열 표기 주의하기
    this.seqqueryparametersForm.get('variants').setValue([{
      variantCheck: false,
      variantDescription: ['test description'],
      variantId: ['1_345345_A_AT'],
      variantRegion: ['non-intergenic'],
      variantType: ['snp']
    }]);

    // 전체 reset
    // this.seqqueryparametersForm.reset();
    // array만 reset
    // this.seqqueryparametersForm.get('variants').reset();

    // valueChnages: keyup triggered
    this.seqqueryparametersForm.get('siteName').valueChanges.subscribe(data => {
      console.log(data);
      this.siteName = data;
    });
    this.seqqueryparametersForm.get('startingPosition').valueChanges.subscribe(data => {
      console.log(data);
      this.startingPosCoord = data;
    });
    this.seqqueryparametersForm.get('endingPosition').valueChanges.subscribe(data => {
      this.endingPosCoord = data;
    });
    this.seqqueryparametersForm.get('spacing').valueChanges.subscribe(data => {
      this.spacing = data;
    });
    this.seqqueryparametersForm.get('threshold').valueChanges.subscribe(data => {
      this.threshold = data;
    });
    this.seqqueryparametersForm.valueChanges.subscribe(data => {
      console.log(data);
    });

    // statusChanges: 동적으로 validation의 상태를 체크 => disable submit button
    this.seqqueryparametersForm.get('siteName').statusChanges.subscribe(data => {
      console.log(data);
    });
    this.seqqueryparametersForm.get('startingPosition').statusChanges.subscribe(data => {
      console.log(data);
    });
    this.seqqueryparametersForm.get('endingPosition').statusChanges.subscribe(data => {
      console.log(data);
    });
    this.seqqueryparametersForm.get('spacing').statusChanges.subscribe(data => {
      console.log(data);
    });
    this.seqqueryparametersForm.get('threshold').statusChanges.subscribe(data => {
      console.log(data);
    });
    this.seqqueryparametersForm.statusChanges.subscribe(data => {
      console.log(data);
    });
  }
  // tslint:disable-next-line:typedef
  postParamsForSeq() {
    // test
    console.log(this.seqqueryparametersForm);
    // getting the entire values
    console.log(this.seqqueryparametersForm.value);
    // getting individual values
    console.log(this.seqqueryparametersForm.value.siteName);
    console.log(this.seqqueryparametersForm.value.startingPosition);
    console.log(this.seqqueryparametersForm.value.endingPosition);
    console.log(this.seqqueryparametersForm.value.maskOptionYn);
    console.log(this.seqqueryparametersForm.value.spacing);
    console.log(this.seqqueryparametersForm.value.threshold);

    this.resetForm();
    this.seqqueryparametersForm.patchValue({ // TODO de-activate by setting checkbox
      startingPosition: 0,
      endingPosition: 0});
  }

  // tslint:disable-next-line:typedef
  resetForm(){
    this.seqqueryparametersForm.reset();
    this.defaultSet();
  }

  // tslint:disable-next-line:typedef
  createNewVarInfo(formData){
    // post call form mock data before testing dynamicFormData
    const newFormData = {
      id: 9,
      variantId: '10_343453453_G_A',
      variantType: 'snp',
      variantRegion: 'downstream',
      variantDescription: 'test snp'
    };

    const dynamicFormData = {
      id: formData.value.id,
      variantId: formData.value.variantId,
      variantType: formData.value.variantType,
      variantRegion: formData.value.variantRegion,
      variantDescription: formData.value.variantDescription
    };

    this.sequencesService.createSequences(dynamicFormData).subscribe(data => {
      console.log(data);
      this.responseTrue = true;
    });
  }

  // tslint:disable-next-line:typedef
  updateVariant(variantId){
    const newFormData = {
      id: 3,
      variantId: '3_343453453_G_A',
      variantType: 'put',
      variantRegion: 'downstream',
      variantDescription: 'test update put method'
    };

    this.sequencesService.updateSequences(variantId, newFormData).subscribe(data => {
      this.responseTrue = true;
    });

  }

  // tslint:disable-next-line:typedef
  deleteVariant(variantId){
    console.log(variantId);
    this.sequencesService.deleteSequence(variantId).subscribe(data => {
      console.log(data);
      this.responseTrue = true;
    });
  }

  // tslint:disable-next-line:typedef
  getVariant(){
    this.sequencesService.getSequenceById().subscribe(data => {
      console.log(data);
    });
  }

  // get variants(){
  //   return this.seqqueryparametersForm.get('variants') as FormArray;
  // }
  // // dynamic inputbox
  // addNewVariant(){
  //   const variantLength = this.seqqueryparametersForm.get('variants').value.length;
  //
  //   console.log('::::::::::' + variantLength);
  //   // 먼저 위 get variants에서 form array값을 가져온다.
  //   const newVariant = this.formBuilder.group({
  //     variantId: [variantLength + 1],
  //     variantType: [''],
  //     variantRegion: [''],
  //     variantDescription: [''],
  //     variantCheck: ['', Validators.requiredTrue]
  //   });
  //
  //   this.variants.push(newVariant);
  // }
  // removeVariant(variantId){
  //   console.log('clicked!!!!!!!!!!!!!!!!!!!!' + variantId);
  //   this.variants.removeAt(variantId);
  // }
}
