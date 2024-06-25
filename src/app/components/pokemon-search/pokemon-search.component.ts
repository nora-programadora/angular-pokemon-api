import { Component, OnInit, Input, Output} from '@angular/core';
import { PokedexServiceService } from '../../pokedex-service.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.sass']
})
export class PokemonSearchComponent implements OnInit {
  
  @Output() pokemon: any;

    pokeName:string='';

  constructor(private htttp:PokedexServiceService) { }

  ngOnInit(): void {
  }

  getPokemon(id:string){
    const input = document.querySelector('input');

    if (input?.value==='') {
      return;
    }

      this.htttp.getPokemonData(id)
      .subscribe(
        (response) => {
          this.pokemon=response;
          console.log(this.pokemon);
        }
      )

   input!.value='';

  }
}
