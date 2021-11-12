import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import {FilterPipe} from './pipes/filter.pipe';
import {FilterProtocolPipe} from './pipes/filterProtocol.pipe';

@NgModule({
  imports: [],
  declarations: [FilterPipe, FilterProtocolPipe],
  exports: [
    FilterPipe,
    FilterProtocolPipe
  ],
  providers: [DataService]
})
export class CoreModule { }
