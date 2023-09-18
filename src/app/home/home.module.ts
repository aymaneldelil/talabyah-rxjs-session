import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UnsubscribeDecoratorComponent } from '../unsubscribe-decorator/unsubscribe-decorator.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { ShareReplayComponent } from './share-replay/share-replay.component';
import { TakeComponent } from './take/take.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    DebounceTimeComponent,
    ShareReplayComponent,
    TakeComponent,
    CombineLatestComponent,
    ForkJoinComponent,
    UnsubscribeDecoratorComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
