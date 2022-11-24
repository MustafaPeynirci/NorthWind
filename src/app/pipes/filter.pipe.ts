import { ProductListModel } from './../models/product-list-model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: ProductListModel[], filterText: string): ProductListModel[] {
    filterText = filterText?filterText.toLocaleLowerCase():null
    return filterText?value.filter((p:ProductListModel)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value
  }

}
