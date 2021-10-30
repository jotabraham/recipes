import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  // the EventEmitter has been changed to a subject to reflect best practice
  // ther4 the emit()s below have been changed to next()s
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
    // this will return a COPY of the array
    // called onInit, so it won't update
    // there4 must SUBSCRIBE to updates to array
    // using EVENT EMITTER ^^^
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
    // this is again a COPY of the array ^
    // but always an UPDATED copy
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    // ... below is the SPREAD operator which turns an array into separate items
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
