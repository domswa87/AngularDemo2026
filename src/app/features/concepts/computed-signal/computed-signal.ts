import { Component, computed, signal } from '@angular/core';

/** Computed signals lesson — compare `apples` (source) vs `label` (derived). */
@Component({
  selector: 'app-concept-computed-signal',
  imports: [],
  templateUrl: './computed-signal.html',
  styleUrls: ['../concept-page.css', './computed-signal.css'],
})
export class ComputedSignalConcept {
  // ★ THIS LESSON (TS): source signal — when this changes, computed values that depend on it refresh.
  readonly apples = signal(2);

  // Display helper only — same text as the real computed line below, safe to show in HTML.
  readonly codeSample = 'readonly label = computed(() => `${this.apples()} apple(s)`);';

  // ★ THIS LESSON (TS): derived signal — body runs again whenever `apples()` changes.
  readonly label = computed(() => `${this.apples()} apple(s)`);

  // Changes only the source; `label` updates itself — see template {{ label() }}.
  addApple(): void {
    this.apples.update((n) => n + 1);
  }
}
