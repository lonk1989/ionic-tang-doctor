import { Component } from '@angular/core';

import { ChatPage } from '../chat/chat';
import { ContactsPage } from '../contacts/contacts';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChatPage;
  tab3Root = ContactsPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
