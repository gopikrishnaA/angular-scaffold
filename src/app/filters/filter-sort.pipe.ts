import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByTime'
})
export class FilterByTimePipe implements PipeTransform {
  transform(items: any, isSort: any): any {
    return items.sort((a, b) => {
      return isSort ? (a.timeStamp > b.timeStamp ? -1
        : a.timeStamp < b.timeStamp ? 1 : 0)
        : (a.timeStamp < b.timeStamp ? -1
          : a.timeStamp > b.timeStamp ? 1 : 0)
    })
  }
}