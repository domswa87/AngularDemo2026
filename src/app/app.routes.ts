import { Routes } from '@angular/router';

import { ComputedSignalConcept } from './features/concepts/computed-signal/computed-signal';
import { EventBindingConcept } from './features/concepts/event-binding/event-binding';
import { IfBlockConcept } from './features/concepts/if-block/if-block';
import { InterpolationConcept } from './features/concepts/interpolation/interpolation';
import { PropertyBindingConcept } from './features/concepts/property-binding/property-binding';
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
  { path: '**', redirectTo: '' },
];
