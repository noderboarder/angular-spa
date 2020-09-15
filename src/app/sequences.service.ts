import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root' // inject 대상을 모든 component(root)가 아닌 일정 컴포넌트로 바꿀수있다.
})
export class SequencesService {

  constructor(private httpClient: HttpClient) { }

  // get call
  // tslint:disable-next-line:typedef
  getSequences(){

    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');

    const sequenceList = this.httpClient.get('http://localhost:3000/variants', {headers: httpHeaders});

    // hard coding data
    // const sequenceList = [
    //   {variantId: '1_23453453_G_T', variantType: 'snp', variantDescription: 'test', variantRegion: 'intergenic', variantCheck: true},
    //   {variantId: '1_20203453_A_T', variantType: 'snp', variantDescription: 'test', variantRegion: 'intergenic', variantCheck: true},
    //   {variantId: '2_5645632_A_ATTT', variantType: 'ins', variantDescription: 'test', variantRegion: 'upstream', variantCheck: true},
    //   {variantId: '3_223545_AT_A', variantType: 'del', variantDescription: 'test', variantRegion: 'downstream', variantCheck: true}
    // ];

    return sequenceList;
  }

  // post call
  // tslint:disable-next-line:typedef
  createSequences(createVarInfoJson){
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('content-type', 'application/json');
    return this.httpClient.post('http://localhost:3000/variants', createVarInfoJson, {headers: httpHeaders});
  }

  // tslint:disable-next-line:typedef
  seqServiceOpCheck(){
    console.log('sequence service work');
  }
}
