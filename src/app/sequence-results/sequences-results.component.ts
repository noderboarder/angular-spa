import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sequences-results',
  templateUrl: './sequences-results.component.html',
  styleUrls: ['./sequences-results.component.scss']
})
export class SequencesResultsComponent implements OnInit {

  constructor() { }

  seqComponentTitle = 'Sequences filtered by conditions above!';

  showSeqs = true;
  vTypeColor = 'red';
  seqColor = 'grey';

  // insColor = 'blue';
  // delColor = 'blue';

  variantType = 'sv';

  resultHeader = 'resultHeader';
  resultBackground = 'resultBackground';
  resultHeaderBackground = 'resultHeaderBackground';

  seqSet = [
    {seq: 'atatcgcg', rsId: 'rs2356742', variantType: 'ins', spos: 234, epos: 245642, param: ''},
    {seq: 'atcatatcgcgg', rsId: 'rs23223442', variantType: 'ins', spos: 235634, epos: 457806, param: ''},
    {seq: 'tcgtcgatcgaatcga', rsId: 'rs232342', variantType: 'del', spos: 345646, epos: 445656, param: ''},
    {seq: 'tcgtctcgtcgatcgtcgaatcgtcgaaagaa', rsId: 'rs2121342', variantType: 'del', spos: 456, epos: 47457, param: ''},
    {seq: 'ccgatcgatcgacgattgat', rsId: 'rs2342435', variantType: 'SNP', spos: 3645, epos: 5747, param: ''},
    {seq: 'ccgatcgatgacgatt', rsId: 'rs23562', variantType: 'SNP', spos: 23004, epos: 458976, param: ''},
    {seq: 'ggatcagatctc', rsId: '.', variantType: 'sv', spos: 2923, epos: 479875, param: ''},
    {seq: 'ggagatcggatcatctcatc', rsId: 'rs306634', variantType: 'sv', spos: 200364, epos: 24787972, param: ''}
  ];
  today: number = Date.now();

  ngOnInit(): void {
  }

}
