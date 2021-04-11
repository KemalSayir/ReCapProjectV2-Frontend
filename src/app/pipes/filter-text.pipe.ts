import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';
import { CarImagesDetail } from '../models/carImagesDetail';


@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {

  transform(value: CarImagesDetail[], filterText: string): CarImagesDetail[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((p:CarImagesDetail) => p.carName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
