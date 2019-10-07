import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
// import { reducer } from './app.reducer';



export interface State {
  app: { user: object, showSideBar: boolean, showMessage: boolean};
}

export const reducers: ActionReducerMap<State> = {
  app: reducer
};

const TOGGLE_SIDEBAR = '[APP STATE] toggle side bar';
const TOGGLE_DIALOGUE = '[APP STATE] show dialog';
const SET_LOGGED_IN_USER = '[APP STATE] set logged in user';

export function reducer(state, action) {
  const freshState: State = {
    app: {
      user: {
        first_name: '',
        last_name: ''
      },
      showSideBar: false,
      showMessage: false
    }
  };
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      const user = state ? { ...state.user, ...action.payload } : {...action.payload};
      return {
        ...state, user
      };

    case TOGGLE_SIDEBAR:

      return {
        ...state,
        showSideBar: action.payload
      };
    case TOGGLE_DIALOGUE:

      return {
        ...state,
        showMessage: action.payload
      };
    default:
      return state;
  }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
