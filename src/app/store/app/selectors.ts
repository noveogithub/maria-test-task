import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './reducer';

export const getAppState = createFeatureSelector<AppState>('app');

export const getAuth = createSelector(
  getAppState,
  state => state.auth,
)

export const getToken = createSelector(
  getAuth,
  auth => auth ? auth.id : null,
)
