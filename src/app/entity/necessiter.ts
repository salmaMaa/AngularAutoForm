import { Cocktail } from "./cocktail";
import { Ingredient } from "./ingredient";

export interface Necessiter {

    qteutilisee: number;
    ingredient: Ingredient;
    cocktail: Cocktail;

}