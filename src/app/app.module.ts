import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CocktailService } from './cocktail.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListeIngParCockComponent } from './liste-ing-par-cock/liste-ing-par-cock.component';
import { ListeCocktailComponent } from './liste-cocktail/liste-cocktail.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeIngParCockComponent,
    ListeCocktailComponent
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
