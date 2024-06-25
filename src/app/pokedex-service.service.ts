import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class PokedexServiceService {
  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  getPokemon(limit: number, offset: number) {
    return this.http.get(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
  }

  getPokemonData(name: string | number) {
    return this.http.get(`${this.baseUrl}/${name}`);
  }

  getPokemonsByUrl(url: string) {
    return this.http.get(url);
  }
}
