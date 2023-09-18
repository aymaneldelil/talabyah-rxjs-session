import { Component, OnDestroy, OnInit } from '@angular/core';
import { AutoUnsubscribe } from './decorator';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'unsubscribe-decorator',
  templateUrl: './unsubscribe-decorator.component.html',
  styleUrls: ['./unsubscribe-decorator.component.scss'],
})
@AutoUnsubscribe()
export class UnsubscribeDecoratorComponent implements OnInit, OnDestroy {
  private testObservable: BehaviorSubject<string> = new BehaviorSubject('TEST');
  constructor() {}

  ngOnInit(): void {
    this.testObservable.subscribe({
      next: () => {
        console.log('next');
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
