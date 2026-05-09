import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

/**
 * RxJS + Angular — read `rxjs-intro.html` for ★ markers; core ideas are `Observable`, `pipe`, and `async`.
 */
@Component({
  selector: 'app-concept-rxjs-intro',
  imports: [AsyncPipe],
  templateUrl: './rxjs-intro.html',
  styleUrls: ['../concept-page.css', './rxjs-intro.css'],
})
export class RxjsIntroConcept {
  // ★ THIS LESSON (TS): Observable stream — `interval` emits on a timer; `pipe` shapes the stream.
  readonly ticker$: Observable<number> = interval(750).pipe(
    map((index) => index + 1),
    take(20),
  );

  // Helper only — mirrors the code above for the cheat sheet block.
  readonly streamSnippet = `readonly ticker$: Observable<number> = interval(750).pipe(
  map((index) => index + 1),
  take(20),
);`;

  readonly templateSnippet = '<p>{{ ticker$ | async }}</p>';
}
