import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../entity/ingredient';
import { CocktailService } from '../cocktail.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cocktail } from '../entity/cocktail';
import { Necessiter } from '../entity/necessiter';

@Component({
  selector: 'app-liste-ing-par-cock',
  templateUrl: './liste-ing-par-cock.component.html',
  styleUrls: ['./liste-ing-par-cock.component.css']
})


export class ListeIngParCockComponent implements OnInit{

  public numco !: number;
  public necesiters ?: Array<Necessiter> ;
  public necessiterModif ?: Necessiter;
  public ingDelete ?: number;
  
  constructor(private cocktailService: CocktailService, private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(
      (params : ParamMap) =>{
        this.numco = parseInt(params.get('numco')!) ;
      }
    )
    this.getIngByCocktail();

  }

  public getIngByCocktail(): void{
  
    this.cocktailService.getIngredientsByCocktail(this.numco).subscribe({
      
      next: (reponse:  any[])=>{
        this.necesiters =  new Array<Necessiter>;
        for (let index = 0; index < reponse.length; index++) {
          const ligneNec : Necessiter = reponse[index] ;
          this.necesiters?.push(ligneNec) ;
          
        }
      },
      error : (erreur : HttpErrorResponse)=>{
        console.log(erreur.message);
        
      }
    
    });
  }

  //Fonction qui permet d'ouvrir le modal edit
  public onOpenModal(necessiter : Necessiter): void{
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.type = "button";
    button.style.display = "none";
    button.setAttribute('data-toggle','modal');

    this.necessiterModif = necessiter;
    button.setAttribute('data-target','#updateNecModal');
    
    
    container?.appendChild(button);
    button.click();

  }

  //Fonction renvoyant les donnée dur formulaire updateNecessiter vers le service
  public updateNec(necessiter: Necessiter ): void{
    
    this.cocktailService.updateNecessiter(necessiter).subscribe({
      next: (reponse: Necessiter)=>{
        console.log(reponse);
        this.getIngByCocktail();
      },
      error : (erreur : HttpErrorResponse)=>{
        console.log(erreur.message);
        this.getIngByCocktail();
        
      }
    }
      

    );
  }


  //Fonction qui permet d'ouvrir le modal delete
  public onOpenDeleteModal(code : number): void{
    const container = document.getElementById('container');
    const button = document.createElement('button');
    button.type = "button";
    button.style.display = "none";
    button.setAttribute('data-toggle','modal');
    
      this.ingDelete = code;
      button.setAttribute('data-target','#deleteNecModal');
    
    
    container?.appendChild(button);
    button.click();

  }

  //Fonction renvoyant les donnée du formulaire deleteNecessiter vers le service
  public deleteNecessiter(codeing: number ): void{
    
  
    this.cocktailService.deleteNecessiter(this.numco, codeing).subscribe({
      next: (reponse: void)=>{
        console.log(reponse);
        this.getIngByCocktail();
      },
      error : (erreur : HttpErrorResponse)=>{
        console.log(erreur.message);
        this.getIngByCocktail();
        
      }
    }
    );
  }

  
}
