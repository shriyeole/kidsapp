import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private navCtrl: NavController) {}
  openInformationPage() {
    this.navCtrl.navigateForward('alphabet-information');
  }
  openInformationPage1() {
    this.navCtrl.navigateForward('alphabet-information1');
  }
  openInformationPage2() {
    this.navCtrl.navigateForward('alphabet-information2');
  }
}
