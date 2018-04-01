import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/services/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';
import 'rxjs/Rx';

const FIRE_BASE_API = 'https://udemy-recipe-7877c.firebaseio.com/recipes.json';
@Injectable()
export class DataStorageService {

  constructor(private http: Http, 
  			  private recipeService: RecipeService,
  			  private authService: AuthService) { }

  storeRecipes(){
  	const token = this.authService.getToken();
  	if(token != null)
  		return this.http.put(FIRE_BASE_API + `?auth=${token}`,this.recipeService.getRecipes());
  }

  getRecipes(){
  	const token = this.authService.getToken();
  	if(token != null)
  	{
	  	this.http.get(FIRE_BASE_API + `?auth=${token}`)
	  		.map(
	  			(response: Response) => {
	  				const recipes: Recipe[] = response.json();
	  				for(let recipe of recipes){
	  					if(!recipe['ingredients']){
	  						recipe['ingredients'] = [];
	  					}
	  				}
	  				return recipes;
	  			}
			)
			.subscribe(
				(recipes: Recipe[]) => {
					this.recipeService.setRecipes(recipes);
				}
			);
	}
  }
}
