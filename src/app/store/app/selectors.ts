import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './reducer';

export const getAppState = createFeatureSelector<fromReducer.AppState>('app');

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

export const getNotifications = createSelector(getAppState, fromReducer.selectAll);
