import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IApi} from '../models/api.model';
import {Observable} from 'rxjs';



@Injectable()
export class DataService {

  baseUrl: string = 'https://api.publicapis.org/entries';

  constructor(private http: HttpClient) { }

  getApi(): Observable<IApi>{
    return this.http.get<IApi>(`${this.baseUrl}`);
  }

  getApiByTitle(title): Observable<IApi>{
    return this.http.get<IApi>(`${this.baseUrl}?title=${title}`);
  }
}
