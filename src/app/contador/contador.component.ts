import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent  {

  counter = 0;
  onPlus(): void {
    this.counter += 5;
  }
  onsubtract(): void {
    this.counter -= 5;
  }
}

 /* title = 'Web Contador';
  numero = 10;
  base = 5;

  constructor() { }
  ngOnInit(): void {
  }

  acumular(valor: number){
    this.numero += valor;

  }
  */
/*
  sumar(){
    this.numero +=1;
  }

  restar(){
    this.numero -=1;
  }
  */


