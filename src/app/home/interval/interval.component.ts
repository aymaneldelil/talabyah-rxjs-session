import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss'],
})
export class IntervalComponent {
  time: Date = new Date();
  time$ = interval(1000);

  constructor() {}
}
