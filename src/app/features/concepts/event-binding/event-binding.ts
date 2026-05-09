import { Component } from '@angular/core';

/** Event binding lesson — focus on `(click)="..."` in the HTML and the handler below. */
@Component({
  selector: 'app-concept-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrls: ['../concept-page.css', './event-binding.css'],
})
export class EventBindingConcept {
  // Supporting only: proves the handler ran (interpolation — see that lesson).
  clicks = 0;

  // ★ THIS LESSON (TS): method wired from the template via (click)="onButtonClick()".
  onButtonClick(): void {
    this.clicks++;
  }
}
