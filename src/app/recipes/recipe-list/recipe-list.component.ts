import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pasta', 'Noodles and sOWce', 'https://images.squarespace-cdn.com/content/v1/55db39ece4b06065680e83b3/1627316913642-W1H3SU2HNI1NHNZDFMAI/IMG_1787-ETPhoto.jpg?format=1500w')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
