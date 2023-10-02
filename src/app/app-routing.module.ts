import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeIngParCockComponent } from './liste-ing-par-cock/liste-ing-par-cock.component';
import { ListeCocktailComponent } from './liste-cocktail/liste-cocktail.component';
import { AddIngCockComponent } from './add-ing-cock/add-ing-cock.component';
import { ListeIngredientComponent } from './liste-ingredient/liste-ingredient.component';

const routes: Routes = [
  {
    path : 'getIngByCock/:numco',
    component: ListeIngParCockComponent
  },
  {
    path : 'getLesCocktails',
    component: ListeCocktailComponent
  },
  {
    path : '',
    component: ListeCocktailComponent
  },
  {
    path : 'addIngCock/:numco',
    component : AddIngCockComponent
  },
  {
    path : 'getLesIngredients',
    component: ListeIngredientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
