import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Portada', url: '/portada', icon: 'albums' },
    { title: 'Personajes', url: '/personajes', icon: 'paper-plane' },
    { title: 'Momentos', url: '/momentos', icon: 'beer' },
    { title: 'Acerca de', url: '/acercade', icon: 'information' },
    { title: 'En mi Vida', url: '/enmivida', icon: 'heart' },
    { title: 'Contratame', url: '/contratame', icon: 'people-circle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
