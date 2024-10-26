import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'task',
  standalone: true
})
export class TaskPipe implements PipeTransform {

  transform(value: any, ...args: string[]): any {
    let search = args[0];
    return value.filter((a : {title:string;description : string}) => a.title.toLowerCase().includes(search.toLowerCase()) || a.description.toLowerCase().includes(search.toLowerCase()))
  }

}
