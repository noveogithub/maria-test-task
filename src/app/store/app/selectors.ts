import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './reducer';

export const getAppState = createFeatureSelector<AppState>('app');

export const getUserId = createSelector(
  getAppState,
  state => state.userId,
)
