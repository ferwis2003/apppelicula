import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
})
export class MomentosPage implements OnInit {
  selectedMoment: any;

  constructor() { }

  moment1 = {
    title: 'Capitan america levanta el mjolnir',
    details: 'Este personaje llamado capitan america usa el mjolnir para golpear al villano de esta pelicula llamado thanos.',
    videoUrl: '../../assets/video/Capitán América levanta el martillo de ThorMjolnir.mp4',
  };

  moment2 = {
    title: 'Hulk y Rocket reclutan a thor',
    details: 'El increible Hulk y su amigo Rocket reclutan a thor luego de muchos años distanciados para seguir luchando y salvar al mundo',
    videoUrl: '../../assets/video/Hulk y Rocket reclutan a Thor.mp4',
  };

  moment3 = {
    title: 'Iron Man truena los dedos',
    details: 'Iron man u hombre de acero hace un chasquido para acabar con la legion de thanos y asi salvar el mundo de este',
    videoUrl: '../../assets/video/Iron Man Chasquea los dedos.mp4',
  };

  showMomentDetails(moment: any) {
    this.selectedMoment = moment;
  }

  resetSelectedMoment() {
    this.selectedMoment = null;
  }

  ngOnInit() {
  }

}
