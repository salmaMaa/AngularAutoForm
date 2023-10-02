import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CocktailService } from './cocktail.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListeIngParCockComponent } from './liste-ing-par-cock/liste-ing-par-cock.component';
import { ListeCocktailComponent } from './liste-cocktail/liste-cocktail.component';
import { AddIngCockComponent } from './add-ing-cock/add-ing-cock.component';
import { ListeIngredientComponent } from './liste-ingredient/liste-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeIngParCockComponent,
    ListeCocktailComponent,
    AddIngCockComponent,
    ListeIngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
