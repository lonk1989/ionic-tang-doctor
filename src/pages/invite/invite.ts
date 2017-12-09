import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DoctorListPage } from '../doctor-list/doctor-list';

@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html'
})
export class InvitePage {
  constructor(public navCtrl: NavController) {

  }
  
  startPage() {
    this.navCtrl.push(DoctorListPage);
  }

}
