import {Action} from '@ngrx/store';
import {IApi} from '../models/api.model';

export const GET_APIS = '[ALL] Apis';
export const GET_APIS_SUCCESS = '[ALL] Apis Success';
export const GET_APIS_ERROR = '[ALL] Apis Error';

export const GET_APIS_TITLE = '[ALL] Apis Title';
export const GET_APIS_TITLE_SUCCESS = '[ALL] Apis Title Success';
export const GET_APIS_TITLE_ERROR = '[ALL] Apis Title Error';


/****************************************
 * GET all the api's
 ****************************************/
export class GetAllApis implements Action {
  readonly type = GET_APIS;
}

export class GetAllApisSuccess implements Action {
  readonly type = GET_APIS_SUCCESS;

  constructor(public payload: IApi) {
  }
}

export class GetAllApisError implements Action {
  readonly type = GET_APIS_ERROR;

  constructor(public payload: Error) {
  }
}
/****************************************
 * GET all the api's by title
 ****************************************/
export class GetAllApisByTitle implements Action {
  readonly type = GET_APIS_TITLE;
  constructor(public payload: string) {
  }
}

export class GetAllApisByTitleSuccess implements Action {
  readonly type = GET_APIS_TITLE_SUCCESS;

  constructor(public payload: IApi) {
  }
}

export class GetAllApisByTitleError implements Action {
  readonly type = GET_APIS_TITLE_ERROR;

  constructor(public payload: Error) {
  }
}

