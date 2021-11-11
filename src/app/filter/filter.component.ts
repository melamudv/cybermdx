import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IApi, IResponse} from '../models/api.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() apis: IResponse;
  @Output() categorySelected = new EventEmitter<string>();
  @Output() protocolSelected = new EventEmitter<string>();
  protocol = [{
    name: 'HTTPS'
  }, {name: 'HTTP'}];
  constructor() { }

  ngOnInit(): void {

  }
  removeDuplicate(data: IApi[]): IApi[]{
    return _.uniqBy(data, 'Category');
  }

  selectedCategory(data): void{
    this.categorySelected.emit(data.value);
  }
  selectedProtocol(data): void{
    this.protocolSelected.emit(data.value);
  }
}
