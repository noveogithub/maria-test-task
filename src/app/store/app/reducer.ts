import { HttpErrorResponse } from '@angular/common/http';
import * as fromApp from './actions';

export interface AppState {
  auth: {
    loading: boolean;
    userId: string;
  }
  error: HttpErrorResponse;
}

export const initialState: AppState = {
  auth: {
    loading: false,
    userId: null,
  },
  error: null,
};

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
      return {
        ...state,
        auth: { userId: action.payload.userId, loading: false },
      };
    }
    case fromApp.LOGOUT: {
      return {
        ...state,
        auth: initialState.auth,
      };
    }
    case fromApp.SET_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
