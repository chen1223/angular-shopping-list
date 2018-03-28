import { Injectable, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';

@Injectable()
export class RecipeService {
  currentRecipe: Recipe;

  private recipeList: Recipe[] = [
  	new Recipe(
  		'Homemade American Apple Pie',
  		`traditional American pie.`,
  		'https://c1.staticflickr.com/7/6184/6076181270_90d8fc4fff_b.jpg',
  		[
  			new Ingredient('tomato',5),
  			new Ingredient('apple',1),
  			new Ingredient('onion',2)
		]
	),
  	new Recipe(
  		'Burger with Fries',
  		'Typical burger with fries',
  		'https://c1.staticflickr.com/5/4239/35399827032_208e4ba1c2_b.jpg',
  		[
  			new Ingredient('cheese',1),
  			new Ingredient('meat',4),
  			new Ingredient('lettus',2)
		]
	)
  ];

  constructor() { }

  setCurrentRecipe(recipe: Recipe){
  	this.currentRecipe = recipe;
  }

  getRecipes(){
  	return this.recipeList.slice();
  }

  getRecipe(id){
  	return this.recipeList.slice()[id];
  }
}
