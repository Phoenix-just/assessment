import { Pipe } from '@angular/core';

@Pipe({ name: 'tableFilter', standalone: true })
export class TableFilter {

  transform(array: Array<any>, filter: string) {
    filter = filter.toLowerCase();
    const filteredArray = array.filter((item: any) => {
        if (typeof item == 'object') {
            return Object.values(item).some((value: any) => String(value).toLowerCase().indexOf(filter) != -1);
        } else if (typeof item == 'string') {
            return String(item).toLowerCase().indexOf(filter) != -1;
        } else {
            return true;
        }
    });
    return filteredArray;
  }
}