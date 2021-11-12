import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as apisActions from './apis.actions';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import {catchError, debounceTime, map, switchMap} from 'rxjs/operators';
import {DataService} from '../core/data.service';
import {GetAllApisByTitle, GetAllApisByTitleError, GetAllApisByTitleSuccess, GetAllApisError, GetAllApisSuccess} from './apis.actions';


@Injectable()
export class ApiEffects {
  constructor(private actions$: Actions,
              private dataService: DataService) {
  }

  @Effect()
  getAllApis$: Observable<Action> = this.actions$.pipe(
    ofType(apisActions.GET_APIS),
    switchMap(() => this.dataService.getApi()),
    map(apis => new GetAllApisSuccess(apis)),
    catchError((err) => [new GetAllApisError(err)])
  );

  @Effect()
  getApisByTitle$: Observable<Action> = this.actions$.pipe(
    ofType(apisActions.GET_APIS_TITLE),
    map((action: GetAllApisByTitle ) => action.payload),
    debounceTime(1000),
    switchMap((name) => this.dataService.getApiByTitle(name)),
    map(api => new GetAllApisByTitleSuccess( api )),
    catchError((err) => [new GetAllApisByTitleError(err)])
  );

}
