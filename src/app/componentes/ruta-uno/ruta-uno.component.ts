import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-ruta-uno',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './ruta-uno.component.html',
  styleUrl: './ruta-uno.component.css'
})
export class RutaUnoComponent {
  route = inject(ActivatedRoute);
  datosEntrada: any

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.datosEntrada = data;
    });

  }

}
