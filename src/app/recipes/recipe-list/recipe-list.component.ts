import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipeList: Recipe[] = [];

  constructor(private recipeService: RecipeService, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipes();
  }

  //On RecipeItem Click
  recipeClick(recipeItem: Recipe){
    this.recipeService.setCurrentRecipe(recipeItem);
  }

  //On New Recipe Btn Clicked
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route})
  }
}
