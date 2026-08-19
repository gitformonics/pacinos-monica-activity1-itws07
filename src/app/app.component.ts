import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonSplitPane, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonListHeader, IonItem, IonIcon, IonLabel, IonMenuToggle, IonMenu } from '@ionic/angular/standalone';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { addIcons } from 'ionicons';
import { mailOutline, sendOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, IonItem, IonListHeader, IonList, IonContent, IonTitle, IonToolbar, IonHeader, IonApp, IonRouterOutlet, IonSplitPane, IonMenuToggle, IonMenu, RouterLink, RouterLinkActive],
})
export class AppComponent {
  constructor() {
    addIcons({ mailOutline, sendOutline, trashOutline });
  }
}
