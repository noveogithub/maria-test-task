import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { appReducer, AppState } from './app/reducer';
import { callsReducer, CallsState } from './calls/reducer';

export interface NoveoState {
  router: RouterReducerState;
  app: AppState;
  calls: CallsState;
}

export const reducers: ActionReducerMap<NoveoState> = {
  router: routerReducer,
  app: appReducer,
  calls: callsReducer,
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<NoveoState>[] = [];
