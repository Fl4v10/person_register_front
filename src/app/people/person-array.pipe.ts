import { PipeTransform, Pipe } from '@angular/core';
import { PersonModel } from '../models/person.model';

@Pipe({
    name: 'personFilter',
    pure: false
})

export class PersonFilter implements PipeTransform {
    transform(items: PersonModel[], filter: string): any {
        if (!items || !filter) {
            return items;
        }

        return items.filter((item: PersonModel) => item.name.indexOf(filter) !== -1);
    }
}
