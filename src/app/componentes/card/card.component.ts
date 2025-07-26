import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = 'Default Card Title';
  @Input() content: string = 'Default Content';
  @Input({ required: true }) buttonTitle: string = 'Button Title';
  @Output() buttonClicked = new EventEmitter<any>();

  variableJson: any = {
    nombre: 'Juan',
    apellido: 'Perez',
  }
}
