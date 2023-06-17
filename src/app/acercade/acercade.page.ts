import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.page.html',
  styleUrls: ['./acercade.page.scss'],
})
export class AcercadePage implements OnInit {

  seasons: string = "1, Es una pelicula";
  creator: string = "Stan Lee, Jack Kirby y Jim Starlin";
  productora: string = "Marvel Studios";

  constructor() { }

  ngOnInit() {
  }

}
