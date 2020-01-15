import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{
  
  ingredientsChanged = new EventEmitter<Ingredient[]>(); 

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

getIngredients(){
  return this.ingredients;
}

addIngredients(ingredient : Ingredient){
  this.ingredients.push(ingredient);
}


addIngre(ingredients : Ingredient[]){
  for(let ingredient of ingredients){
    this.addIngredients(ingredient);
  }
}

}