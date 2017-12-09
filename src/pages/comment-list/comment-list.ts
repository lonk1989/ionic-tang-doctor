import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DoctorListPage } from '../doctor-list/doctor-list';

@Component({
  selector: 'page-comment-list',
  templateUrl: 'comment-list.html'
})
export class CommentListPage {
  constructor(public navCtrl: NavController) {

  }
  
  startPage() {
    this.navCtrl.push(DoctorListPage);
  }

}
