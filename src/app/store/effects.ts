import { AppEffects } from './app/effects';
import { CallsEffects } from './calls/effects';
import { RouterEffects } from './router/effects';

export const STORE_EFFECTS = [
  AppEffects,
  CallsEffects,
  RouterEffects,
];
