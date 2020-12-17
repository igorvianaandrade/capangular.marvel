import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extesionDate'
})
export class ExtesionDatePipe implements PipeTransform {

  transform(value: Date): string {
    let response: string = "";

    response = value.getDate().toString();

    //response = 17

    switch (value.getMonth() + 1) {
      case 1:
        response += " de janeiro de ";
        break;
      case 2:
        response += " de fevereiro de ";
        break;
      case 3:
        response += " de março de ";
        break;
      case 12:
        response += " de dezembro de ";
        break;
    }

    //response = 17 de dezembro de 


    response += value.getFullYear().toString();

    //response = 17 de dezembro de 2020

    return response;
  }

}
