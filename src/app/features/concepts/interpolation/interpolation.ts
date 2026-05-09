import { Component } from '@angular/core';

/**
 * Interpolation lesson — read `interpolation.html` next; the ★ markers match this file.
 */
@Component({
  selector: 'app-concept-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrls: ['../concept-page.css'],
})
export class InterpolationConcept {
  // ★ THIS LESSON (TS): expose a value from the class; the template prints it with {{ phrase }}.
  readonly phrase = 'Hello from the component class.';

  // Helper only: lets the HTML show the characters "{{ phrase }}" without breaking the template parser.
  readonly interpolationSyntax = '{{ phrase }}';
}
