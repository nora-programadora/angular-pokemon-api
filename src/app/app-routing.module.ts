import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
    pathMatch: 'full'
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
