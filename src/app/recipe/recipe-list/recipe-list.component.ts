import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() theRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Steak', 'Delicios steak using this recipe',
      'https://foremangrillrecipes.com/wp-content/uploads/2013/06/featured-ribeye-steak-foreman-grill.jpg'),
    new Recipe('Apple Pie', 'The best Apple Pie in the West',
      'https://images-gmi-pmc.edge-generalmills.com/75593ed5-420b-4782-8eae-56bdfbc2586b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe) {
    this.theRecipe.emit(recipe)
  }

}
