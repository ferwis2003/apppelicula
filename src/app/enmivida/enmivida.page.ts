import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enmivida',
  templateUrl: './enmivida.page.html',
  styleUrls: ['./enmivida.page.scss'],
})
export class EnmividaPage implements OnInit {

  constructor() { }

  importance: string = "Esta serie es importante en mi vida porqueme gusta la saga de avengers y al ser esta la ultima pelicula la llevare en mi corazon :(";

  ngOnInit() {
  }

}
