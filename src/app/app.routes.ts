import { Routes } from '@angular/router';

import { ComputedSignalConcept } from './features/concepts/computed-signal/computed-signal';
import { EventBindingConcept } from './features/concepts/event-binding/event-binding';
import { ForLoopConcept } from './features/concepts/for-loop/for-loop';
import { IfBlockConcept } from './features/concepts/if-block/if-block';
import { InterpolationConcept } from './features/concepts/interpolation/interpolation';
import { PropertyBindingConcept } from './features/concepts/property-binding/property-binding';
import { RoutingDemoScreenA } from './features/concepts/routing-intro/demo-screen-a';
import { RoutingDemoScreenB } from './features/concepts/routing-intro/demo-screen-b';
import { RoutingIntroConcept } from './features/concepts/routing-intro/routing-intro';
import { RxjsIntroConcept } from './features/concepts/rxjs-intro/rxjs-intro';
import { SignalsIntroConcept } from './features/concepts/signals-intro/signals-intro';
import { Home } from './features/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'concepts/interpolation', component: InterpolationConcept },
  { path: 'concepts/property-binding', component: PropertyBindingConcept },
  { path: 'concepts/event-binding', component: EventBindingConcept },
  { path: 'concepts/signals', component: SignalsIntroConcept },
  { path: 'concepts/computed', component: ComputedSignalConcept },
  { path: 'concepts/if-block', component: IfBlockConcept },
  { path: 'concepts/for-loop', component: ForLoopConcept },
  // ★ ROUTING LESSON: nested routes — parent shell + child URLs screen-a / screen-b
  {
    path: 'concepts/routing',
    component: RoutingIntroConcept,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'screen-a' },
      { path: 'screen-a', component: RoutingDemoScreenA },
      { path: 'screen-b', component: RoutingDemoScreenB },
    ],
  },
  { path: 'concepts/rxjs', component: RxjsIntroConcept },
  { path: '**', redirectTo: '' },
];
