import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus',
  pure: false
})
export class FilterStatusPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const filteredValue = value.filter(result => result[propName].indexOf(filterString) !== -1);
    return filteredValue;
  }

}
