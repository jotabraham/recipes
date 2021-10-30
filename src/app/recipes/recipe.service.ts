import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Pasta', 
    'Noodles and sOWce', 
    'https://images.squarespace-cdn.com/content/v1/55db39ece4b06065680e83b3/1627316913642-W1H3SU2HNI1NHNZDFMAI/IMG_1787-ETPhoto.jpg?format=1500w',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('Cakes of the Pan', 
    'Useless without toppings', 
    'https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324494/gluten-free-pancakes-for-different-diets-topped-with-blueberries-and-nuts.jpg',
    [
      new Ingredient('Flat cakes', 2),
      new Ingredient('Toppings', 1),
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
    // slice() with no arguemts returns a copy of the array in this file
    // combination with private above makes recipes[] inaccessible from outside
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
