import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService} from '../services/recipe.service';
import { AuthService } from '../../auth/auth.service';

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
  				private router: Router,
          private authService: AuthService) { }

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
    if(!this.authService.isAuthenticated())
      this.router.navigate(['/signin']);
    else
  	  this.router.navigate(['edit'],{relativeTo: this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
