import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiseaseDetailPage } from '../disease-detail/disease-detail';
import { RecipeListPage } from '../recipe-list/recipe-list';
import { DoctorPage } from '../doctor/doctor';
import { ContactsPage } from '../contacts/contacts';
import { CommentListPage } from '../comment-list/comment-list';
import { InvitePage } from '../invite/invite';
import { RecipeContactsPage } from '../recipe-contacts/recipe-contacts';
import { PhotoContactsPage } from '../photo-contacts/photo-contacts';
import { RecipeTemplatePage } from '../recipe-template/recipe-template';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  startPage () {
    this.navCtrl.push(DiseaseDetailPage);
  }

  startRecipePage () {
    this.navCtrl.push(RecipeListPage);
  }

  startDoctorPage () {
    this.navCtrl.push(DoctorPage);
  }

  startContactsPage () {
    this.navCtrl.push(ContactsPage);
  }

  startCommentListPage () {
    this.navCtrl.push(CommentListPage);
  }

  startInvitePage () {
    this.navCtrl.push(InvitePage);
  }

  startRecipeContactsPage () {
    this.navCtrl.push(RecipeContactsPage);
  }

  startPhotoContactsPage () {
    this.navCtrl.push(PhotoContactsPage);
  }

  startRecipeTemplatePage () {
    this.navCtrl.push(RecipeTemplatePage);
  }
}
