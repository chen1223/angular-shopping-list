import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
  	new Ingredient('Apples', 5),
  	new Ingredient('Tomatoes', 10)
  ];
  constructor() { }

  addIngredient(ingredientItem: Ingredient){
  	this.ingredients.push(ingredientItem);
  	this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
  	this.ingredients.push(...ingredients);
  	this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients(){
  	return this.ingredients.slice();
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
