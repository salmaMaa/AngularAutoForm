import { Categorie } from "./categorie";

export interface Cocktail {
    numco: number;
    nomco: string;
    datecreationco: string;
    explicationco: string;
    image: string;
    uneCat: Categorie;

}