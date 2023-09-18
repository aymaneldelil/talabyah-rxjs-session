import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { delay, take } from 'rxjs/operators';

@Component({
  selector: 'take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss'],
})
export class TakeComponent implements OnInit, OnDestroy {
  ShowInTemplate: any = '';
  private _intervalCount = interval(1000);
  private _takeFive = this._intervalCount.pipe(take(10), delay(500));

  public takeOperation() {
    this._takeFive.subscribe({
      next: (value) => {
        this.ShowInTemplate = value;
      },
      complete: () => {
        this.ShowInTemplate = 'Completed';
      },
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    //   this._takeFive.unsubscribe();
  }
}
