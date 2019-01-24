import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './reducer';

export const getCallsState = createFeatureSelector<fromReducer.CallsState>('calls');

export const getCalls = createSelector(getCallsState, fromReducer.selectAll);

export const getCallsEntities = createSelector(getCallsState, fromReducer.selectEntities);

export const getCallsLoadingAll = createSelector(
  getCallsState,
  state => state.loadingAll,
);

export const getCallsLoading = createSelector(
  getCallsState,
  state => state.loading,
);

export const getCallLoading = createSelector(
  getCallsLoading,
  (loading, props = {}) => props.id ? !!loading[props.id] : false,
);

export const getCall = createSelector(
  getCallsEntities,
  (entities, props = {}) => props.id ? entities[props.id] : null,
);

export const getDateParseFormat = createSelector(
  getCallsState,
  state => state.dateParseFormat,
);
