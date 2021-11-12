import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import {ReplacePipe} from './pipes/replace.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {FilterProtocolPipe} from './pipes/filterProtocol.pipe';

@NgModule({
  imports: [],
  declarations: [ReplacePipe, FilterPipe, FilterProtocolPipe],
  exports: [
    ReplacePipe,
    FilterPipe,
    FilterProtocolPipe
  ],
  providers: [DataService]
})
export class CoreModule { }
