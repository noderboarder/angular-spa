import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sequences-resutls',
  templateUrl: './sequences-resutls.component.html',
  styleUrls: ['./sequences-resutls.component.scss']
})
export class SequencesResutlsComponent implements OnInit {

  constructor() { }

  showSeqs = true;
  vTypeColor = 'red';
  seqColor = 'grey';

  // insColor = 'blue';
  // delColor = 'blue';
  
  variantType = 'sv';

  seqSet = [
    {seq: 'atatcgcg', variantType: 'ins'},
    {seq: 'atcatatcgcgg', variantType: 'ins'},
    {seq: 'tcgtcgatcgaatcga', variantType: 'del'},
    {seq: 'tcgtctcgtcgatcgtcgaatcgtcgaaagaa', variantType: 'del'},
    {seq: 'ccgatcgatcgacgattgat', variantType: 'SNP'},
    {seq: 'ccgatcgatgacgatt', variantType: 'SNP'},
    {seq: 'ggatcagatctc', variantType: 'sv'},
    {seq: 'ggagatcggatcatctcatc', variantType: 'sv'}
  ]

  ngOnInit(): void {
  }

}
