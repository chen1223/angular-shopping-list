import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  //On Add button clicked
  addIngredient(){
    let newIngredient = new Ingredient(
        this.name.nativeElement.value,
        this.amount.nativeElement.value
    );
    this.shoppingListService.addIngredient(newIngredient);
  	this.name.nativeElement.value = '';
  	this.amount.nativeElement.value = '';
  }
}
