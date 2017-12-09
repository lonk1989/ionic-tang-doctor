import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DoctorListPage } from '../doctor-list/doctor-list';

@Component({
  selector: 'page-recipe-template',
  templateUrl: 'recipe-template.html'
})
export class RecipeTemplatePage {
  constructor(public navCtrl: NavController) {

  }
  
  startPage() {
    this.navCtrl.push(DoctorListPage);
  }

}
