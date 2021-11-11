import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchQ = new EventEmitter<string>();
  search: string;
  constructor() { }

  ngOnInit(): void {
  }
  searchApi(): void{
    this.searchQ.emit(this.search);
  }
}
