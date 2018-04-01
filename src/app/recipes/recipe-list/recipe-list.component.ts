import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipeList: Recipe[] = [];
  recipeSubscription: Subscription;

  constructor(private recipeService: RecipeService, 
              private router: Router, 
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService,
              private authService: AuthService) { }

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipes();
    this.recipeSubscription = this.recipeService.recipeChanged
        .subscribe(
          (recipes: Recipe[]) => {
            this.recipeList = recipes;
          }
    );
  }

  ngOnDestroy(){
    this.recipeSubscription.unsubscribe();
  }

  //On RecipeItem Click
  recipeClick(recipeItem: Recipe){
    this.recipeService.setCurrentRecipe(recipeItem);
  }

  //On New Recipe Btn Clicked
  onNewRecipe(){
    if(!this.authService.isAuthenticated())
      this.router.navigate(['/signin']);
    else
      this.router.navigate(['new'],{relativeTo: this.route})
  }
}
