import { Component } from '@angular/core';
import { Cocktail } from '../entity/cocktail';
import { CocktailService } from '../cocktail.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-cocktail',
  templateUrl: './liste-cocktail.component.html',
  styleUrls: ['./liste-cocktail.component.css']
})
export class ListeCocktailComponent {

  public cocktails ?: Cocktail[];
  public cocktailModif ?: Cocktail;
  public cocktailDelete ?: Cocktail;

  constructor(private cocktailService: CocktailService) { 

  }

  //Méthodes 

  public getCocktails(): void{
    this.cocktailService.getCocktails().subscribe({
      next: (reponse : Cocktail[])=>{
        this.cocktails = reponse;
      },
      error: (erreur: HttpErrorResponse)=>{
        alert(erreur.message);
      }

    }
      
    );
  }
  
  //Fonction qui permet d'ouvrir le modal correspondant a l'action que l'on veux faire (delete or update)
  public onOpenModal(cocktail : Cocktail, mode : String): void{
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.type = "button";
    button.style.display = "none";
    console.log(mode);
    button.setAttribute('data-toggle','modal');
    if(mode === 'update'){
      this.cocktailModif = cocktail;
      button.setAttribute('data-target','#updateCocktailModal');
    }
    if(mode === 'delete'){
      this.cocktailDelete = cocktail;
      button.setAttribute('data-target','#deleteCocktailModal');
    }
    
    container?.appendChild(button);
    button.click();

  }

  //Fonction qui permet d'ouvrir le modal lors d'un ajout
  public onOpenAddModal(): void{
    
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.type = "button";
    button.style.display = "none";
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target','#addCocktailModal');
  
  
    
    container?.appendChild(button);
    button.click();

  }

  //Fonction renvoyant les donnée dur formulaire add-cocktail vers le service
  public addCocktail(addCocktailForm: NgForm ): void{
    
    document.getElementById("add-cocktail-form")?.click();
    console.log(addCocktailForm.value);
    this.cocktailService.addCocktail(addCocktailForm.value).subscribe({
      next: (reponse: Cocktail)=>{
        console.log(reponse);
        this.getCocktails();
        addCocktailForm.reset();
      },
      error : (erreur : HttpErrorResponse)=>{
        console.log(erreur.message);
        this.getCocktails();
        addCocktailForm.reset();
        
      }
    }
    );
  }

  //Fonction renvoyant les donnée dur formulaire updateCocktail vers le service
  public updateCocktail(cocktail: Cocktail ): void{
    
    
    this.cocktailService.updateCocktail(cocktail).subscribe({
      next: (reponse: Cocktail)=>{
        console.log(reponse);
        this.getCocktails();
      },
      error : (erreur : HttpErrorResponse)=>{
        console.log(erreur.message);
        this.getCocktails();
        
      }
    }
      

    );
  }

  //Fonction renvoyant les donnée du formulaire deleteCocktail vers le service
  public deleteCocktail(numco: number ): void{
    
  
    this.cocktailService.deleteCocktail(numco).subscribe({
      next: (reponse: void)=>{
        console.log(reponse);
        this.getCocktails();
      },
      error : (erreur : HttpErrorResponse)=>{
        console.log(erreur.message);
        this.getCocktails();
        
      }
    }
    );
  }


  ngOnInit(): void {
    this.getCocktails();
  }

}
