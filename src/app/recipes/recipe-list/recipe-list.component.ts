import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Pasta', 'Noodles and sOWce', 'https://images.squarespace-cdn.com/content/v1/55db39ece4b06065680e83b3/1627316913642-W1H3SU2HNI1NHNZDFMAI/IMG_1787-ETPhoto.jpg?format=1500w'),
    new Recipe('A Test Recipe', 'this is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  };

}
