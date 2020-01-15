import { Component, OnInit,ViewChild,ElementRef,EventEmitter,Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInput:ElementRef;
@ViewChild('amountInput') amountInput:ElementRef;
// @Output() addIngredient = new EventEmitter<{name:string,amount:number}>();
addIngredients(){
this.slService.addIngredients({name:this.nameInput.nativeElement.value,amount:this.amountInput.nativeElement.value})
  // this.addIngredient.emit({name:this.nameInput.nativeElement.value,amount:this.amountInput.nativeElement.value})
}

  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }



}

