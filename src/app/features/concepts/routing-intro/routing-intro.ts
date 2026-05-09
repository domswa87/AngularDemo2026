import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

/**
 * Routing lesson — open `app.routes.ts` for the ★ route table; this file wires the interactive demo.
 */
@Component({
  selector: 'app-concept-routing-intro',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './routing-intro.html',
  styleUrls: ['../concept-page.css', './routing-intro.css'],
})
export class RoutingIntroConcept {
  // Helper only: readable excerpt — full config with redirects lives in app.routes.ts.
  readonly routesTableSnippet = `{
  path: 'concepts/routing',
  component: RoutingIntroConcept,
  children: [
    { path: '', pathMatch: 'full', redirectTo: 'screen-a' },
    { path: 'screen-a', component: RoutingDemoScreenA },
    { path: 'screen-b', component: RoutingDemoScreenB },
  ],
}`;

  readonly routerLinkSnippet = '<a routerLink="screen-a">Screen A</a>';
  readonly outletSnippet = '<router-outlet />';
}
