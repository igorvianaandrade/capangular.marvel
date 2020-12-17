import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe';
  valor:number = 10000;
  nomeMinusculo = "dan lustosa";
  nomeMaiusculo = "DAN LUSTOSA";
  dataAtual = new Date();
  numero:number = 1500;
  decimal:number = 44500.45;
  percentual:number = 0.92;
  objeto:any = {
    nome: "dan lustosa",
    idade: 36
  };
  raizQuadrada:number = 9;
}
