import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';

@Component({
  selector: 'debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent implements OnInit, OnDestroy {
  debounceTime = new FormControl('');
  searchString$: Observable<string | null> = new Observable();

  ngOnInit(): void {
    this.searchString$ = this.debounceTime.valueChanges.pipe(
      debounceTime(1000)
    );
  }

  ngOnDestroy(): void {}
}
