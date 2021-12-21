import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styles: [
  ]
})
export class FoodListComponent implements OnInit {

  foodList: Food[] = [
    new Food('Carne',1),
    new Food('Arroz',2),
    new Food('Couve Refogada',3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
