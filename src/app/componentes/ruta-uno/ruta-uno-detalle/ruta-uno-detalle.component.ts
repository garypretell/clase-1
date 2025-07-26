import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-uno-detalle',
  imports: [],
  templateUrl: './ruta-uno-detalle.component.html',
  styleUrl: './ruta-uno-detalle.component.css'
})
export class RutaUnoDetalleComponent implements OnInit {
  variable = input();

  ngOnInit(): void {
    console.log('el valor de la variable es: ', this.variable())
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements elOnInit' to the class.

  }

  ngOnDestroy(): void {
    console.log('salimos del componente Ruta uno Detalle')
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

  }
}
