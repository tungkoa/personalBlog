import { Component, OnInit } from '@angular/core';
import { Test1ServiceService } from '../../it-common/service/test1-service.service';
import { DummyService } from '../../it-common/api/dummy.service';
import {filter, first, map} from 'rxjs/operators';
import { Data } from '../../it-common/interface/data.employ';
import {fromEvent, interval, Observable} from 'rxjs';
import {Info} from '../../it-common/interface/info.employ';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  public listEmploy: Array<Info>;
  constructor(
    private test1ServiceService: Test1ServiceService,
    private dummyService: DummyService,
  ) { }

  ngOnInit() {

  }

  public get() {
      const eventClick = fromEvent(document, 'keydown') as Observable<KeyboardEvent>;
      eventClick.subscribe(event => {
          if (event.ctrlKey) {
              console.log(1);
          }
      })
    const observable: Observable<any> = this.dummyService.getAllEmploy();
    observable.pipe( map(res  => {
      return res.data;
    })).subscribe(observer => {
      this.listEmploy = observer;
      console.log('list', this.listEmploy);
   });
  }

}
