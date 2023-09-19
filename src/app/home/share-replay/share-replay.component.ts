import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss'],
})
export class ShareReplayComponent implements OnInit {
  constructor(private _http: HttpClient) {}

  public sharedData$ = this._http
    .get('https://jsonplaceholder.typicode.com/todos/2')
    .pipe(
      tap((t) => {
        console.log(t);
      }),
      shareReplay(1)
    );

  ngOnInit(): void {}
}
