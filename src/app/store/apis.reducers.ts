import * as apiActions from './apis.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppAction} from '../app.action';
import {IResponse} from '../models/api.model';

export interface State {
  data: IResponse;
  load: boolean;
  action: string;
  error?: Error;
}

const initialState: State = {
  data: null,
  load: false,
  error: null,
  action: null
};

export function ApiReducer(state = initialState, action: AppAction): State {
  // ...state create immutable state object
  switch (action.type) {
      /*************************
     * GET all apis
     ************************/
    case apiActions.GET_APIS:
      return {
        ...state,
        action: apiActions.GET_APIS,
        load: true,
        error: null
      };
    case apiActions.GET_APIS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        load: false,
        error: null
      };
    case apiActions.GET_APIS_ERROR:
      return {
        ...state,
        load: false,
        error: action.payload
      };
    /*************************
     * GET all apis by title
     ************************/
    case apiActions.GET_APIS_TITLE:
      return {
        ...state,
        action: apiActions.GET_APIS_TITLE,
        load: true,
        error: null
      };
    case apiActions.GET_APIS_TITLE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        load: false,
        error: null
      };
    case apiActions.GET_APIS_TITLE_ERROR:
      return {
        ...state,
        load: false,
        error: action.payload
      };
      }
  return state;
}

/*************************
 * SELECTORS
 ************************/
export const getApisState = createFeatureSelector < State > ('apis');
export const getAllApis = createSelector(getApisState, (state: State) => state?.data);
export const getApisLoad = createSelector(getApisState, (state: State) => state?.load);
export const getApisError = createSelector(getApisState, (state: State) => {
  return state.action === apiActions.GET_APIS
    ? state.error
   : null;
});

