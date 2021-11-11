import * as fromApi from './store/apis.reducers';

export interface AppState {
  api: fromApi.State;
}
