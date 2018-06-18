import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRatings'
})
export class FilterRatingsPipe implements PipeTransform {
  transform(items: any, selected: any): any {
    return !selected || selected === 'All' ? items : items.filter(item => item.status === selected)
  }
}


