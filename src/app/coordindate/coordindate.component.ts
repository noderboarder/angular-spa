import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coordindate',
  templateUrl: './coordindate.component.html',
  styleUrls: ['./coordindate.component.scss']
})
export class CoordindateComponent implements OnInit {

  constructor() { }

  chrPlaceholder = 'Chromosome number';
  coordStartPlaceholder = 'Start position number';
  coordEndPlaceholder = 'End position number';

  ngOnInit(): void {
  }

  speciesAlert() {
    console.log('Be Careful about the species');
  }
}
