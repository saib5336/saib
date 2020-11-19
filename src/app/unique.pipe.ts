import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // tslint:disable-next-line:only-arrow-functions
    const uniquedata = value.filter(function(el, index, array) {
      return array.indexOf (el) === index;
    });
    return uniquedata;
  }

}
