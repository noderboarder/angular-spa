import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  retrievingSequences(){
    console.log('retrieving sequences button works');
    alert('under construction. But I promise it will come soon!!');
  }

  ngOnInit(): void {
  }

}
