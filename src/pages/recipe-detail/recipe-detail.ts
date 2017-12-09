import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DoctorListPage } from '../doctor-list/doctor-list';

@Component({
  selector: 'page-recipe-detail',
  templateUrl: 'recipe-detail.html'
})
export class RecipeDetailPage {
  constructor(public navCtrl: NavController) {

  }
  
  startPage() {
    this.navCtrl.push(DoctorListPage);
  }

}
