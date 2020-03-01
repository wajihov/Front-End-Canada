import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "fresh",
  pure: false
})
export class FreshPipe implements PipeTransform {
  transform(persons: any[], searchName: string): any {
    if (!persons || !searchName) {
      return persons;
    }

    return persons.filter(
      item => item.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1
    );
  }
}
