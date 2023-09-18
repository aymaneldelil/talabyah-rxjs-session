import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, of, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { combineLatest } from 'rxjs/internal/operators/combineLatest';
import { combineLatestWith } from 'rxjs/internal/operators/combineLatestWith';

@Component({
  selector: 'combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss'],
})
export class CombineLatestComponent {
  public chicksCountControl = new FormControl();
  public playerCountControl = new FormControl();
  // Player lives
  public gameState$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Game Start'
  );

  // Player lives
  public playerLives$: BehaviorSubject<Array<number>> = new BehaviorSubject<
    Array<number>
  >([]);

  // Number of remaining chickens
  public remainingChickens$: BehaviorSubject<Array<number>> =
    new BehaviorSubject<Array<number>>([]);

  // Ui Flag
  public isGameGenerated: boolean = false;

  generateGame() {
    Array.from({ length: this.playerCountControl.value }).map((_, index) => {
      this.playerLives$.next([...this.playerLives$.getValue(), index]);
    });

    Array.from({ length: this.chicksCountControl.value }).map((_, index) => {
      console.log('array', index);

      this.remainingChickens$.next([
        ...this.remainingChickens$.getValue(),
        index,
      ]);
    });

    this.combineLatestExample();
    this.isGameGenerated = true;
  }

  public killPlayer() {
    this.playerLives$.getValue().pop();
    this.playerLives$.next(this.playerLives$.getValue());
  }

  public killChicken() {
    this.remainingChickens$.getValue().pop();
    this.remainingChickens$.next(this.remainingChickens$.getValue());
  }

  public combineLatestExample() {
    of(true)
      .pipe(combineLatest([this.playerLives$, this.remainingChickens$]))
      .subscribe({
        next: ([of, live, chickens]) => {
          live.length == 0 && this.gameState$.next('Game Over !!');
          chickens.length == 0 &&
            this.gameState$.next('Great Job ,Up To Next Level ');
        },
      });
  }
}
