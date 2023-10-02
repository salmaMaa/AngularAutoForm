import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Cocktail } from './entity/cocktail';
import { Ingredient } from './entity/ingredient';
import { Necessiter } from './entity/necessiter';

@Injectable({
  providedIn: 'root'
})

export class CocktailService {

  private apiServerUrl = 'http://localhost:8080';


  constructor(private httpClient: HttpClient) { 

  }

  getCocktails(): Observable<Cocktail[]>{
    return this.httpClient.get<Cocktail[]>(`${this.apiServerUrl}/getCocktails`)
  }

  addCocktail( cocktail : Cocktail): Observable<Cocktail>{
    return this.httpClient.post<Cocktail>(`${this.apiServerUrl}/addCocktail`, cocktail);
  }

  updateCocktail( cocktail : Cocktail): Observable<Cocktail>{
    return this.httpClient.put<Cocktail>(`${this.apiServerUrl}/updateCocktail`, cocktail);
  }

  deleteCocktail( numCo : number): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiServerUrl}/deleteCocktail/${numCo}`);
  }

  getIngredientsByCocktail(numco : number): Observable<Ingredient[]>{
    return this.httpClient.get<Ingredient[]>(`${this.apiServerUrl}/getNecessiterByCocktail/${numco}`)
  }

  updateNecessiter(nec : Necessiter): Observable<Necessiter>{
    return this.httpClient.put<Necessiter>(`${this.apiServerUrl}/updateNecessiter`, nec); 
  }

  getIngredients(): Observable<Ingredient[]>{
    return this.httpClient.get<Ingredient[]>(`${this.apiServerUrl}/getIngredients`)
  }

  addNecessiter(nec : Necessiter): Observable<Necessiter>{
    return this.httpClient.post<Necessiter>(`${this.apiServerUrl}/addNecessiter`, nec);
  }

  deleteNecessiter(numco : number, codeing : number) : Observable<void>{
    return this.httpClient.delete<void>(`${this.apiServerUrl}/deleteNecessiter/${numco}/${codeing}`);
  }
  
}
