import { Component, input } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [],
  templateUrl: `./boton.component.html`,
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  titulo = input('click me');
 }
