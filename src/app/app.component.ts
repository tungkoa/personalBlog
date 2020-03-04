import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {interval, Observable, timer} from 'rxjs';
import {takeUntil, timeout} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'personalBlog';

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    const observable: Observable<any> = interval(500);
    const subscription = observable.pipe(takeUntil(timer(2000))).subscribe(() => {
      const btn = document.querySelectorAll('.st-btn') as NodeListOf<HTMLElement>;
      if (btn.length === 0) { return; }
      btn.forEach(elm => {
        elm.style.backgroundColor = 'transparent';
      });
      subscription.unsubscribe();
    });
  }

}
