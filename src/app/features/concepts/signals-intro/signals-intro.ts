import { Component, signal } from '@angular/core';

/** Writable signals lesson — core lines: `signal()`, template `mood()`, and `.set()`. */
@Component({
  selector: 'app-concept-signals-intro',
  imports: [],
  templateUrl: './signals-intro.html',
  styleUrls: ['../concept-page.css', './signals-intro.css'],
})
export class SignalsIntroConcept {
  // ★ THIS LESSON (TS): create reactive state; read it in HTML as mood() — note the ().
  readonly mood = signal('okay');

  // ★ THIS LESSON (TS): updates the signal; template re-renders automatically.
  makeGreat(): void {
    this.mood.set('great');
  }
}
