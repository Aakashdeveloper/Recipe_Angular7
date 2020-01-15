import { Component, OnInit,Input} from '@angular/core';
import { Recipe } from '../../receipe.model';
import {ReceipesService} from '../../receipes.service';
@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
@Input() recipe:Recipe ;
// @Output() emitRecipe = new EventEmitter<void>();
  constructor(private receipeService:ReceipesService) { }

  ngOnInit() {
  }
  
  onSelected(){
    this.receipeService.receipeSelected.emit(this.recipe)
    // this.emitRecipe.emit();
  }
}