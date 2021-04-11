import { Pipe, PipeTransform } from '@angular/core';
import { CarImagesDetail } from '../models/carImagesDetail';

@Pipe({
  name: 'filterForColorPipe'
})
export class FilterForColorPipePipe implements PipeTransform {

  transform(value: CarImagesDetail[], filterText: string): CarImagesDetail[] {
    filterText = filterText?filterText.toLocaleLowerCase():"";
    return filterText?value.filter((p:CarImagesDetail) => p.colorName.toLocaleLowerCase().indexOf(filterText)!==-1):value;;
  }

}
