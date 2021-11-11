import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import {ReplacePipe} from './pipes/replace.pipe';
import {FilterPipe} from './pipes/filter.pipe';

@NgModule({
  imports: [],
  declarations: [ReplacePipe, FilterPipe],
  exports: [
    ReplacePipe,
    FilterPipe
  ],
  providers: [DataService]
})
export class CoreModule { }
