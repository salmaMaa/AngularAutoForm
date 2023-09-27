import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../entity/ingredient';
import { CocktailService } from '../cocktail.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-liste-ing-par-cock',
  templateUrl: './liste-ing-par-cock.component.html',
  styleUrls: ['./liste-ing-par-cock.component.css']
})


export class ListeIngParCockComponent implements OnInit{

  public numco!: number;
  public ingredients ?: Ingredient[];

  
  constructor(private cocktailService: CocktailService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    
    this.getIngByCocktail();
    this.route.paramMap.subscribe(
      (params : ParamMap) =>{
        console.log(params.get('numco'))
        //this.numco = params.get('numco');
      }
    )
  }

  public getIngByCocktail(): void{
    
    this.cocktailService.getIngredientsByCocktail(this.numco).subscribe({
      
      next: (reponse:  Ingredient[])=>{
        console.log(reponse);
      },
      error : (erreur : HttpErrorResponse)=>{
        console.log(erreur.message);
        
      }
    
    });
  }



}
