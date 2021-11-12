import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from './app.state';
import {Store} from '@ngrx/store';
import {GetAllApis, GetAllApisByTitle} from './store/apis.actions';
import {Observable} from 'rxjs';
import {IApi, IResponse} from './models/api.model';
import {getAllApis, getApisLoad} from './store/apis.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cybermdx';
  apis$: Observable<IResponse>;
  load$: Observable<boolean>;
  filterByCategory: string;
  filterByProtocol: string;

  constructor(private store: Store<AppState> ) {}
  ngOnInit(): void {
    this.store.dispatch(new GetAllApis());
    this.apis$ = this.store.select(getAllApis);
    this.load$ = this.store.select(getApisLoad);
  }
  searchAPI(data: string): void{
    this.store.dispatch(new GetAllApisByTitle(data));
  }
  filterCategory(data: string): void{
    this.filterByCategory = data;
  }
  filterProtocol(data: string): void{
    this.filterByProtocol = data;
  }

}
