import {Component, Input, OnInit} from '@angular/core';
import {IApi, IResponse} from '../models/api.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input() apis: IResponse;
  @Input() filterByCategory: string;
  @Input() filterByProtocol: string;
  constructor() { }

  isHttp(data: boolean): string{
    return data ? `HTTPS` : `HTTP`;
  }
  ngOnInit(): void {
  }

}
