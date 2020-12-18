import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePipes'
})
export class imagePipe implements PipeTransform {

  transform(titulo:string): string {
    return titulo + " * Comics Marvel * ";
  }

}
