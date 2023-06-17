import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {

  selectedCharacter: any;

  constructor() { }

  character1 = {
    name: 'Capitan America',
    image: '../../assets/img/americaa.png',
    details: 'El Capitán América, cuyo nombre real es Steven "Steve" Grant Rogers, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por los historietistas Joe Simon y Jack Kirby, el personaje apareció por primera vez en Captain America Comics #1 (marzo de 1941) de Timely Comics, predecesor de Marvel Comics.',
  };

  character2 = {
    name: 'Thor',
    image: '../../assets/img/thorr.png',
    details: 'Thor es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Es el dios del trueno asgardiano basado en la deidad homónima, del pueblo ficticio inspirado en el mundo de Asgard de la mitología nórdica. En su tierra natal es conocido como Thor Odinson pero fuera de esta utiliza la identidad secreta de Donald Blake. Es poseedor del martillo encantado, Mjolnir, que le otorga capacidad de volar y manipular el clima entre sus otros atributos sobrehumanos, además de concentrar su poder.',
  };

  character3 = {
    name: 'bruce banner (Hulk)',
    image: '../../assets/img/gulkk.png',
    details: 'Hulk es un personaje ficticio, un superhéroe que aparece en los cómics estadounidenses publicados por la editorial Marvel Comics, es considerado el personaje más fuerte de Marvel Comics. El personaje fue creado por los escritores Stan Lee y Jack Kirby siendo su primera aparición en The Incredible Hulk #1 publicado en mayo de 1962',
  };

  showCharacterDetails(character: any) {
    this.selectedCharacter = character;
  }

  ngOnInit() {
  }

}
