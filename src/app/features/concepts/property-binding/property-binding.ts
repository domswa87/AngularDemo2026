import { Component } from '@angular/core';

/** Property binding lesson — the important binding is `[value]="label"` in the HTML. */
@Component({
  selector: 'app-concept-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrls: ['../concept-page.css'],
})
export class PropertyBindingConcept {
  // ★ THIS LESSON (TS): this field is what `[value]` pushes into the DOM.
  readonly label = 'Sent from the component via property binding';
}
