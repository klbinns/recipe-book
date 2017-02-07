import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Dummy1', 'Desc1', 'http://vignette4.wikia.nocookie.net/scribblenauts/images/4/42/Crash_Test_Dummy.png', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Dummy2', 'Desc2', 'https://files.allaboutbirds.net/wp-content/themes/html5blank-stable/images/blue-winged-warbler.jpg', [])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

}
