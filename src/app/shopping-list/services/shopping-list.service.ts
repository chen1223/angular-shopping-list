import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
  	new Ingredient('Apples', 5),
  	new Ingredient('Tomatoes', 10)
  ];
  constructor() { }

  addIngredient(ingredientItem: Ingredient){
  	this.ingredients.push(ingredientItem);
  	this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
  	this.ingredients.push(...ingredients);
  	this.ingredientsChanged.emit(this.ingredients.slice());
  }

  getIngredients(){
  	return this.ingredients.slice();
  }
}
