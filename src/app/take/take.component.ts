import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { delay, take } from 'rxjs/operators';

@Component({
  selector: 'take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit {
  ShowInTemplate: any = '';

  ngOnInit(): void {
    const intervalCount = interval(1000);
    const takeFive = intervalCount.pipe(take(5), delay(4));

    takeFive.subscribe({
      next: (value) => {
        this.ShowInTemplate = value;
      },
      complete: () => {
        this.ShowInTemplate = 'Completed';
      },
    });
  }
}
