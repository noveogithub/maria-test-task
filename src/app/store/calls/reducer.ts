import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Call } from '../../types';
import * as fromCalls from './actions';

export interface CallsState extends EntityState<Call> {
  loadingAll: boolean;
  loading: { [id: string]: boolean };
  saving: { [id: string]: boolean };
  dateParseFormat: string;
}

export const adapter: EntityAdapter<Call> =
  createEntityAdapter<Call>({
    selectId: call => call.id,
  });

export const initialState: CallsState = adapter.getInitialState({
  loadingAll: false,
  loading: {},
  saving: {},
  dateParseFormat: 'DD/MM/YYYY HH:mm:ss',
});

export function callsReducer(state = initialState, action: fromCalls.CallsActions): CallsState {
  switch (action.type) {
    case fromCalls.LOAD_CALLS: {
      return {
        ...state,
        loadingAll: true,
      };
    }
    case fromCalls.LOAD_CALLS_ERROR: {
      return {
        ...state,
        loadingAll: false,
      };
    }
    case fromCalls.LOAD_CALLS_SUCCESS: {
      return adapter.addAll(action.payload, { ...state, loadingAll: false });
    }
    case fromCalls.CLEAR_CALLS: {
      return adapter.addAll([], { ...state, loadingAll: initialState.loadingAll });
    }
    case fromCalls.LOAD_CALL: {
      return {
        ...state,
        loading: { ...state.loading, [action.payload.id]: true },
      };
    }
    case fromCalls.LOAD_CALL_ERROR: {
      return {
        ...state,
        loading: { ...state.loading, [action.payload.id]: false },
      };
    }
    case fromCalls.LOAD_CALL_SUCCESS: {
      return adapter.addOne(action.payload, {
        ...state,
        loading: { ...state.loading, [action.payload.id]: false },
      });
    }
    case fromCalls.CLEAR_CALL: {
      const { [action.payload.id]: _, ...loading } = state.loading;
      return adapter.removeOne(action.payload.id, { ...state, loading });
    }
    default: {
      return state;
    }
  }
}

export const { selectAll, selectEntities } = adapter.getSelectors();
