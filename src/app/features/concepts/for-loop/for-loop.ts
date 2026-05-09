import { Component } from '@angular/core';

/** Lists with built-in `@for` — compare `for-loop.html` for the ★ markers. */
@Component({
  selector: 'app-concept-for-loop',
  imports: [],
  templateUrl: './for-loop.html',
  styleUrls: ['../concept-page.css', './for-loop.css'],
})
export class ForLoopConcept {
  // ★ THIS LESSON (TS): `@for` repeats markup for each entry — use a stable `id` for `track`.
  readonly tasks = [
    { id: 'plan', label: 'Sketch the UI' },
    { id: 'build', label: 'Render lists with @for' },
    { id: 'verify', label: 'Reorder data and watch the DOM update' },
  ];

  // Helper only: readable copy of the loop head — keep in sync mentally with the template below.
  readonly loopSnippet = `@for (task of tasks; track task.id) {
  <li>{{ task.label }}</li>
}`;
}
