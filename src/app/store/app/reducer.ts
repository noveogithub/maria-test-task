import * as fromApp from './actions';

export interface AppState {
  loading: boolean;
  userId: string;
}

export const initialState: AppState = {
  loading: false,
  userId: null,
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
        userId: action.payload.userId,
      };
    }
    default: {
      return state;
    }
  }
}
