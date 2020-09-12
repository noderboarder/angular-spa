import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  jobStatus: any;
  data: Observable<any>;
  data1: Observable<any>;

  constructor() { }

  ngOnInit(): void {

    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next('In progress');
      }, 3000);

      setTimeout(() => {
        observer.next('Processing');
      }, 8000);

      setTimeout(() => {
        observer.next('Completed');
      }, 10000);

      // error() testing
      setTimeout(() => {
        observer.error();
      }, 10000);

      // observable을 끝내는 방법은 complete()을 쓴다.
      setTimeout(() => {
        observer.complete(); // listening and tracking to changes done
      }, 12000);

      setTimeout(() => {
        observer.next('after complete test');
      }, 14000);
    });

    this.data.subscribe(value => {
      this.jobStatus = value; // first subscription for the observable(data)
    });
    this.data.subscribe(value => {
      console.log('multiple subscription: ' + value); // second subscription for the observable(data)
    });
  }
}
