import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Call } from '../../types';
import * as fromCalls from './actions';

export interface CallsState extends EntityState<Call> {
  loading: boolean;
}

export const adapter: EntityAdapter<Call> =
  createEntityAdapter<Call>({
    selectId: call => call.id,
  });

export const initialState: CallsState = adapter.getInitialState({
  loading: false,
});

export function callsReducer(state = initialState, action: fromCalls.CallsActions): CallsState {
  switch (action.type) {
    case fromCalls.LOAD_CALLS: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromCalls.LOAD_CALLS_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case fromCalls.LOAD_CALLS_SUCCESS: {
      return adapter.addAll(action.payload, { ...state, loading: false });
    }
    case fromCalls.CLEAR_CALLS: {
      return adapter.addAll([], { ...initialState });
    }
    default: {
      return state;
    }
  }
}

export const { selectAll } = adapter.getSelectors();
