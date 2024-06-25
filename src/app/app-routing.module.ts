import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokeDetailsComponent } from './components/poke-details/poke-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
    pathMatch: 'full'
  },
  {
    path: 'pokeDetails/:name',
    component: PokeDetailsComponent
  },
  {
    path: 'search',
    component: PokemonSearchComponent
  },
  {
    path: '**',
    redirectTo: ''
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
