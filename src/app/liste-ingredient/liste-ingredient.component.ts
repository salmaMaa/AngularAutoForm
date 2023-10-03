import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../entity/ingredient';
import { CocktailService } from '../cocktail.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-liste-ingredient',
  templateUrl: './liste-ingredient.component.html',
  styleUrls: ['./liste-ingredient.component.css']
})
export class ListeIngredientComponent implements OnInit {

  public ingredients ?: Ingredient[];
  public ingredientModif ?: Ingredient;
  public ingredientDelete ?: Ingredient;

  constructor(private cocktailService: CocktailService) { 

  }

  public getIngredients(): void{
    this.cocktailService.getIngredients().subscribe({
      next: (reponse : Ingredient[])=>{
        this.ingredients = reponse;
      },
      error: (erreur: HttpErrorResponse)=>{
        alert(erreur.message);
      }

    }
      
    );
  }

  ngOnInit(): void {
    
    this.getIngredients();

  }

  //Fonction qui permet d'ouvrir le modal lors d'un ajout
  public onOpenAddModal(): void{
    
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.type = "button";
    button.style.display = "none";
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target','#addIngredientModal');
  
  
    container?.appendChild(button);
    button.click();

  }

  //Fonction renvoyant les donnée dur formulaire add-ingredient vers le service
  public addIngredient(addIngredientForm: NgForm ): void{
    console.log("je vais ajouter")
    document.getElementById("add-ingredient-form")?.click();
    console.log(addIngredientForm.value);
    this.cocktailService.addIngredient(addIngredientForm.value).subscribe({
      next: (reponse: Ingredient)=>{
        console.log(reponse);
        this.getIngredients();
        addIngredientForm.reset();
      },
      error : (erreur : HttpErrorResponse)=>{
        console.log(erreur.message);
        this.getIngredients();
        addIngredientForm.reset();
        
      }
    }
    );
  }




  //Fonction qui permet d'ouvrir le modal correspondant a l'action que l'on veux faire (delete or update)
  public onOpenModal(ingredient : Ingredient, mode : String): void{
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.type = "button";
    button.style.display = "none";
    console.log(mode);
    button.setAttribute('data-toggle','modal');
    if(mode === 'update'){
      this.ingredientModif = ingredient;
      button.setAttribute('data-target','#updateIngredientModal');
    }
    if(mode === 'delete'){
      this.ingredientDelete = ingredient;
      button.setAttribute('data-target','#deleteIngredientModal');
    }
    
    container?.appendChild(button);
    button.click();

  }


  //Fonction renvoyant les donnée dur formulaire update vers le service
  public updateIngredient(ingredient: Ingredient ): void{
    
    
    this.cocktailService.updateIngredient(ingredient).subscribe({
      next: (reponse: Ingredient)=>{
        console.log(reponse);
        this.getIngredients();
      },
      error : (erreur : HttpErrorResponse)=>{
        console.log(erreur.message);
        this.getIngredients();
        
      }
    }
      

    );
  }


  //Fonction renvoyant les donnée du formulaire deleteIngredient vers le service
  public deleteIngredient(codeing: number ): void{
    
  
    this.cocktailService.deleteIngredient(codeing).subscribe({
      next: (reponse: void)=>{
        console.log(reponse);
        this.getIngredients();
      },
      error : (erreur : HttpErrorResponse)=>{
        console.log(erreur.message);
        this.getIngredients();
        
      }
    }
    );
  }
}
