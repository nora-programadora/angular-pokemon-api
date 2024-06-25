import { Component, OnInit } from '@angular/core';
import { PokedexServiceService } from '../../pokedex-service.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.sass']
})
export class PokedexComponent implements OnInit {
  pokemons: any[] = [];
  pokemon: any[]= [];
  page = 1;
  next: string | null = null;
  previous: string | null = null;
  totalPokemons!: number;

  constructor(private http: PokedexServiceService) {}

  ngOnInit(): void {
    this.loadMore();
  }

  loadMore(url?: string) {
    if (url) {
      this.http.getPokemonsByUrl(url).subscribe((response: any) => {
        this.handleResponse(response);
      });
    } else {
      this.http.getPokemon(10, (this.page - 1) * 10).subscribe((response: any) => {
        this.handleResponse(response);
      });
    }
  }

  handleResponse(response: any) {
    this.totalPokemons = response.count;
    this.next = response.next;
    this.previous = response.previous;
    response.results.forEach((result: any) => {
      this.http.getPokemonData(result.name).subscribe((uniqueResponse: any) => {
        this.pokemons.push(uniqueResponse);
      });
    });
  }


  showData(name: string){
    // console.log('the names is:', name);
    this.http.getPokemonData(name)
    .subscribe( (response:any) => {
      this.pokemon=response;
      console.log(this.pokemon);
    })
  }

}
