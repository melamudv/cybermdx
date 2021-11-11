import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term: string): any {
    return term ? items.filter(item => item.Category.indexOf(term) !== -1) : items;
  }
}
