import { Component, OnInit } from '@angular/core';
import { Cocktail } from './entity/cocktail';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { CocktailService } from './cocktail.service';
import { NgClass, NgFor } from '@angular/common';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angularAutoForm';
  



  //OnInit 
  ngOnInit(): void {
    
  }



}
