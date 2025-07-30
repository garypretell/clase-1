import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickAndMorthyService {
  http = inject(HttpClient);

  constructor() { }

  getCharacter() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  getCharacterById(id: number) {
    return this.http.get('https://rickandmortyapi.com/api/character'+ '/' + id.toString());
  }
}
