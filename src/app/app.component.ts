import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './componentes/card/card.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RUTAS } from './constants/rutas';
import { RickAndMorthyService } from './core/services/rick-and-morthy.service';


@Component({
  selector: 'nodox-root',
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'clase';
  titulo1 = 'Titulo Uno';
  persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    direccion: {
      calle: 'Calle Falsa',
      numero: 123
    },
    nacionalidad: '',
  }

  nombre = 'Juan';

  valorBoton = '';

  valor = 0;

  personas: any[] = [
    { nombre: "Felipe Gavilán", edad: 999 },
    { nombre: "Claudia Rodríguez", edad: 43 },
    { nombre: "Fernando Medina", edad: 23 },
    { nombre: "Milton Encarnación", edad: 53 }
  ];

  personas2: any[] = [
    { nombre: "Felipe Gavilán", edad: 999 },
    { nombre: "Claudia Rodríguez", edad: 43 },
    { nombre: "Fernando Medina", edad: 23 },
    { nombre: "Milton Encarnación", edad: 53 }
  ];

  opcion!: string;

  array = [1, 2, 3, 4];


  duplicarTexto(valor: string): string {
    // return valor + ' ' + valor;
    return `${valor} ${valor}`
  }

  imprimirValor(valor: string): void {
    console.log('Valor ingresado:', valor);
  }

  mostrarAlerta(valor: string): void {
    alert('Valor ingresado: ' + valor);
  }

  crearAlerta(e: any): void {
    alert(`Alerta creada: ${e}`);
  }

  imprimirConsola(e: any): void {
    console.log(`Imprimir en consola ${e}`);
  }

  clickBoton(valor: any): void {
    this.valorBoton = valor
  }

  router = inject(Router);
  servicio = inject(RickAndMorthyService);
  resultado: any;
  resultadoPorId: any;
  rutas = RUTAS;
  rutaSignIn = `${this.rutas.auth}/${this.rutas.signIn}`
  rutaSignUp = `${this.rutas.auth}/${this.rutas.signUp}`
  rutaResetPassword= `${this.rutas.auth}/${this.rutas.resetPassword}`

  redirectToSignIn() {
    this.router.navigateByUrl(this.rutaSignIn)
  }
  
  redirectToSignUp() {
    this.router.navigateByUrl(this.rutaSignUp)
  }
  
  redirectToResetPass() {
    this.router.navigateByUrl(this.rutaResetPassword)
  }

  ngOnInit() {
    this.servicio.getCharacter().subscribe((data: any) => {
      this.resultado = data.results
    })
    this.servicio.getCharacterById(1).subscribe((data: any) => {
      this.resultadoPorId = data
    })
  }
}
