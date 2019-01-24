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

export const getCallsSaving = createSelector(
  getCallsState,
  state => state.saving,
);

export const getCallLoading = createSelector(
  getCallsLoading,
  (loading, props = {}) => props.id ? !!loading[props.id] : false,
);

export const getCallSaving = createSelector(
  getCallsSaving,
  (saving, props = {}) => props.id ? !!saving[props.id] : false,
);

export const getCall = createSelector(
  getCallsEntities,
  (entities, props = {}) => props.id ? entities[props.id] : null,
);

export const getDateParseFormat = createSelector(
  getCallsState,
  state => state.dateParseFormat,
);

export const getUnsavedChanges = createSelector(
  getCallsState,
  state => state.unsavedChanges,
);

export const getEditable = createSelector(
  getCallsState,
  state => state.editable,
);
