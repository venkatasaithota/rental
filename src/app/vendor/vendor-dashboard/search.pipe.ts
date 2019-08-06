import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class SearchPipe implements PipeTransform {

  transform(houses: any[], searchWord: string): any {
    if (!searchWord)
    {
      return houses;
    }
    else
    {
      return houses.filter(searchedElement=>{
        searchedElement.housetype.toLowerCase().indexOf(searchWord.toLocaleLowerCase())!=-1||
        searchedElement.address.toLowerCase().indexOf(searchWord.toLocaleLowerCase())!=-1||
        searchedElement.hrent.toLowerCase().indexOf(searchWord.toLocaleLowerCase())!=-1
      })
    }
  }
}
