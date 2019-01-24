import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { NoveoNotification } from '../../types';
import * as fromApp from './actions';

export interface AppState extends EntityState<NoveoNotification> {
  auth: {
    loading: boolean;
    userId: string;
  }
  errorQueueId: number;
}

export const adapter: EntityAdapter<NoveoNotification> =
  createEntityAdapter<NoveoNotification>({
    selectId: notification => notification.id,
  });

export const initialState: AppState = adapter.getInitialState({
  auth: {
    loading: false,
    userId: null,
  },
  errorQueueId: 0,
});

export function appReducer(state = initialState, action: fromApp.AppActions): AppState {
  switch (action.type) {
    case fromApp.LOGIN: {
      return {
        ...state,
        auth: { ...state.auth, loading: true },
      };
    }
    case fromApp.LOGIN_ERROR: {
      return {
        ...state,
        auth: { ...state.auth, loading: false },
      };
    }
    case fromApp.LOGIN_SUCCESS: {
      const userId = action.payload ? action.payload.userId : null;
      return {
        ...state,
        auth: { userId, loading: false },
      };
    }
    case fromApp.LOGOUT: {
      return {
        ...state,
        auth: initialState.auth,
      };
    }
    case fromApp.SET_ERROR: {
      return adapter.addOne(
        {
          id: String(state.errorQueueId),
          error: action.payload,
        },
        {
          ...state,
          errorQueueId: (state.errorQueueId + 1) % Number.MAX_VALUE,
        },
      );
    }
    case fromApp.DISMISS_ERROR: {
      return adapter.removeOne(action.payload, state);
    }
    default: {
      return state;
    }
  }
}

export const { selectAll, selectEntities } = adapter.getSelectors();
