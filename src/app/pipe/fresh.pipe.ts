import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'myfilterPipe'/* ,
  pure: false */
})
export class FreshPipe implements PipeTransform {
  transform(persons: any[], searchTerm: string): any {
    if (!persons || !searchTerm) {
      return persons;
    }

    return persons.filter(
      item => item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
