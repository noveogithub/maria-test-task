import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './reducer';

export const getAppState = createFeatureSelector<AppState>('app');

export const geAuth = createSelector(
  getAppState,
  state => state.auth,
)

export const getAuthLoading = createSelector(
  geAuth,
  state => state.loading,
)

export const getUserId = createSelector(
  geAuth,
  state => state.userId,
)

export const getAppError = createSelector(
  getAppState,
  state => state.error,
)
