import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../entity/ingredient';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CocktailService } from '../cocktail.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Cocktail } from '../entity/cocktail';
import { Necessiter } from '../entity/necessiter';

@Component({
  selector: 'app-add-ing-cock',
  templateUrl: './add-ing-cock.component.html',
  styleUrls: ['./add-ing-cock.component.css']
})
export class AddIngCockComponent implements OnInit {

  public numco !: number;
  public cocktail ?: Cocktail;
  public listeIng ?: Ingredient[];
  

  constructor(private route: ActivatedRoute, private cocktailService: CocktailService, private router : Router){

  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params : ParamMap) =>{
        console.log(params.get('numco'))
        this.numco = parseInt(params.get('numco')!) ;
      }
    )
    this.getAllIng();

  }

  public getAllIng(){
    this.cocktailService.getIngredients().subscribe({
      
      next: (reponse:  any[])=>{
        this.listeIng = reponse;
        console.log(this.listeIng)
      },
      error : (erreur : HttpErrorResponse)=>{
        console.log(erreur.message);
        
      }
    
    });
  }


  //Fonction renvoyant les donnée dur formulaire updateNecessiter vers le service
  public addNecessiter(necessiter: Necessiter ): void{
    console.log(necessiter);
    this.cocktailService.addNecessiter(necessiter).subscribe({
      next: (reponse: Necessiter)=>{
        console.log(reponse);
        alert("ligne ajoutée ! ")
        this.router.navigate(['/getIngByCock/'+ this.numco])
        
      },
      error : (erreur : HttpErrorResponse)=>{
        console.log(erreur.message);
        this.router.navigate(['/getIngByCock/'+this.numco])
        
      }
    });
  }


}
