import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filterProtocol'
})
export class FilterProtocolPipe implements PipeTransform {
  transform(items: any[], term: string): any {
    if (term === 'ALL'){
      return items;
    }
    else if (term === 'HTTPS'){
      return items.filter(item => item.HTTPS);
    }
    else if (term === 'HTTP') {
      return items.filter(item => !item.HTTPS);
    }
    else{
      return items;
    }
  }
}
