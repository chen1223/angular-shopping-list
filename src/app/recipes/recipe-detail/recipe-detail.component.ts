import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private shoppingListService: ShoppingListService, 
  				private recipeService: RecipeService,
  				private route: ActivatedRoute,
  				private router: Router) { }

  ngOnInit() {
  	this.route.params
  		.subscribe(
  			(params: Params) => {
  				this.id = +params['id'];
  				this.recipe = this.recipeService.getRecipe(this.id);
  			}
		)
  }

  toShoppingList(){
  	this.shoppingListService.addIngredients(this.recipe.ingredients);	
  }

  onEditRecipe(){
  	this.router.navigate(['edit'],{relativeTo: this.route})
  }
}
