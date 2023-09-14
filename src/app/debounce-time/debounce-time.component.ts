import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss'],
})
export class DebounceTimeComponent {
  debounceTime = new FormControl('');
  searchString$ = this.debounceTime.valueChanges.pipe(debounceTime(1000));
}
