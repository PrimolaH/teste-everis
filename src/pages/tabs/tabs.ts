import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { CameraPage } from '../camera/camera';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CameraPage;

  constructor() {

  }
}
