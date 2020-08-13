import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss']
})
export class QualificationComponent implements OnInit {

  constructor() { }
  // tslint:disable-next-line:typedef
  formatLabel(value: number) {
    return value;
  }

  ngOnInit(): void {
  }

}
