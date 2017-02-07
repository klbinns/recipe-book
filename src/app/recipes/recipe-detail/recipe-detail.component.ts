import { Component, Input } from '@angular/core';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: Recipe;

  constructor(private sls: ShoppingListService) { }

  onAddToShoppingList() {
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

}
