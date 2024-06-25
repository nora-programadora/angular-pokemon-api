import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexServiceService } from '../../pokedex-service.service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.sass']
})
export class PokeDetailsComponent implements OnInit {
  @Input() pokemon: any;
  //pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private http: PokedexServiceService
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.http.getPokemonData(name).subscribe(
        (response: any) => {
          this.pokemon = response;
        },
        (error: any) => {
          console.error('Error fetching Pokémon data:', error);
        }
      );
    }
  }
}
