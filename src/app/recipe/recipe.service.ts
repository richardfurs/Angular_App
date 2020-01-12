import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Steak', 'Delicios steak using this recipe',
      'https://foremangrillrecipes.com/wp-content/uploads/2013/06/featured-ribeye-steak-foreman-grill.jpg',
      [new Ingredient('meat', 10), new Ingredient('peppers', 5)]),
    new Recipe('Apple Pie', 'The best Apple Pie in the West',
      'https://images-gmi-pmc.edge-generalmills.com/75593ed5-420b-4782-8eae-56bdfbc2586b.jpg',
      [new Ingredient('Apples', 3), new Ingredient('Cream', 100)])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
