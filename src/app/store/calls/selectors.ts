import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CallsState, selectAll } from './reducer';

export const getCallsState = createFeatureSelector<CallsState>('calls');

export const getCalls = createSelector(getCallsState, selectAll);

export const getCallsLoading = createSelector(
  getCallsState,
  state => state.loading,
);
