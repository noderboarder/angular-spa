import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  queryWriter = '';
  queryDate = '';
  queryEmail = '';

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(data => {
      console.log(data);

      this.queryWriter = data.writer;
      this.queryDate = data.date;
      this.queryEmail = data.email;

    });
  }

  ngOnInit(): void {
  }

}
