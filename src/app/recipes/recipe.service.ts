import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pasta', 'Noodles and sOWce', 'https://images.squarespace-cdn.com/content/v1/55db39ece4b06065680e83b3/1627316913642-W1H3SU2HNI1NHNZDFMAI/IMG_1787-ETPhoto.jpg?format=1500w'),
    new Recipe('A Test Recipe', 'this is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
    // slice() with no arguemts returns a copy of the array in this file
    // combination with private above makes recipes[] inaccessible from outside
  }
}
