import { Component } from '@angular/core';

/** Conditional templates with `@if` — compare `if-block.html` for the ★ markers. */
@Component({
  selector: 'app-concept-if-block',
  imports: [],
  templateUrl: './if-block.html',
  styleUrls: ['../concept-page.css', './if-block.css'],
})
export class IfBlockConcept {
  // ★ THIS LESSON (TS): any expression works here — we use a simple boolean so `@if` stays the star.
  showTip = false;

  // Supporting only: `(click)` — see the Event binding lesson.
  toggleTip(): void {
    this.showTip = !this.showTip;
  }

  // Helper only: same shape as the real `@if` in the template (safe to show via interpolation).
  readonly codeSample = `@if (showTip) {
  <p>Bonus tip</p>
}`;
}
