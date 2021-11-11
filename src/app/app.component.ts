import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from './app.state';
import {Store} from '@ngrx/store';
import {GetAllApis, GetAllApisByTitle} from './store/apis.actions';
import {Observable} from 'rxjs';
import {IApi} from './models/api.model';
import {getAllApis, getApisLoad} from './store/apis.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cybermdx';
  apis$: Observable<IApi[]>;
  load$: Observable<boolean>;
  filterByCategory: string;
  filterByProtocol: string;

  constructor(private store: Store<AppState> ) {}
  ngOnInit(): void {
    this.store.dispatch(new GetAllApis());
    this.apis$ = this.store.select(getAllApis);
    this.load$ = this.store.select(getApisLoad);
  }
  searchAPI(data): void{
    this.store.dispatch(new GetAllApisByTitle(data));
  }
  filterCategory(data): void{
    this.filterByCategory = data;
  }
  filterProtocol(data): void{
    this.filterByProtocol = data;
  }
  ngOnDestroy(): void{

  }
}
