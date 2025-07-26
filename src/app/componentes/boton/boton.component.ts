import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-boton',
  imports: [],
  templateUrl: `./boton.component.html`,
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  titulo = input('click me');
  tipoBoton = input('btn btn-primary');
  action = output<string>();

  @Input() titulo2 = 'Click me';
  @Input() tipoBoton2 = 'btn btn-primary';
  @Output() action2 = new EventEmitter<string>();

  onClick(): any {
    this.action.emit('Button clicked!');
  }

  onClick2(): any {
    this.action2.emit('Button clicked!');
  }
 }
