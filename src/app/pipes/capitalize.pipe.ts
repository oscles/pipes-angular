import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'title'})
export class TitlePipe implements PipeTransform {

    transform(value: string, args?:any[]): string {
        let val = value.toLocaleLowerCase().split(' ');
        return val.reduce((first: string, second: string) => {
            first = first.charAt(0).toLocaleUpperCase().concat(first.slice(1));
            second = second.charAt(0).toLocaleUpperCase().concat(second.slice(1));
            return first.concat(' ', second);
        });
    }

}