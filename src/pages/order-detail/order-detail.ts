import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipeDetailPage } from '../recipe-detail/recipe-detail';

@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html'
})
export class OrderDetailPage {
  constructor(public navCtrl: NavController) {

  }
  
  startPage() {
    this.navCtrl.push(RecipeDetailPage);
  }

}
