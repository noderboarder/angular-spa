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

    // const httpHeaders = new HttpHeaders();
    // httpHeaders.append('content-type', 'application/json');
    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: 'ThisisgoodConvention for custom header',
      timeOutSeconds: '3000'
    });

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
    // create httpHeaders
    let httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: 'ThisisgoodConvention',
      timeOutSeconds: '3000'
    });

    // modification on httpHeaders
    httpHeaders = httpHeaders.set('trying-custom-header', 'whateverIWant');
    httpHeaders = httpHeaders.append('can-use-append-as-well', 'whateverIWant');

    const time = httpHeaders.get('timeOutSeconds');

    if (time === '3000'){
      httpHeaders = httpHeaders.set('Authorization', '');
    }

    return this.httpClient.post('http://localhost:3000/variants', createVarInfoJson, {headers: httpHeaders});
  }

  // tslint:disable-next-line:typedef
  seqServiceOpCheck(){
    console.log('sequence service work');
  }

  // tslint:disable-next-line:typedef
  updateSequences(variantId, updatedInfo){
    const endpointURL = 'http://localhost:3000/variants/' + variantId;
    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: 'ThisisgoodConvention'
    });
    return this.httpClient.put(endpointURL, updatedInfo, {headers: httpHeaders});
  }

  // doesn't work
  // tslint:disable-next-line:typedef
  deleteSequence(variantId){
    const endpointURL = 'http://localhost:3000/variants/' + variantId;
    return this.httpClient.delete(endpointURL);
  }

  // get variant by ID
  // httpParams obj 생성
  // tslint:disable-next-line:typedef
  getSequenceById(){
    const httpParams = new HttpParams({
      // 반드시 내가 add해줘야한다.
      fromObject: {
        id: ['2', '3'],
        variantType: 'snp', // , 가 가능하다.
      }
    });

    return this.httpClient.get('http://localhost:3000/variants', {params: httpParams});

    // 마지막 url 형태는 http://localhost:3000/variants?variantType=3
  }
}
