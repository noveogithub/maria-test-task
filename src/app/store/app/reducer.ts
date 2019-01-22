import { AuthService } from '../../services/auth.service';
import { Auth } from '../../types';
import * as fromApp from './actions';

export interface AppState {
  loading: boolean;
  auth: Auth;
}

export const initialState: AppState = {
  loading: false,
  auth: AuthService.getUser(),
};

export function appReducer(state = initialState, action: fromApp.AppActions): AppState {
  switch (action.type) {
    case fromApp.LOGIN: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromApp.LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case fromApp.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        auth: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
