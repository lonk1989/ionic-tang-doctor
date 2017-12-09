import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrderDetailPage } from '../order-detail/order-detail';

@Component({
  selector: 'page-recipe-list',
  templateUrl: 'recipe-list.html'
})
export class RecipeListPage {
  status:number = 0

  constructor(public navCtrl: NavController) {

  }
  
  startPage() {
    this.navCtrl.push(OrderDetailPage);
  }

}
