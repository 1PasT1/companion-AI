import { Component,OnInit,Input,ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit{
  chosenIndex: number = -1;
  defChosen: boolean = true;
  ngOnInit(): void {

  }
  slidesStore: any = [
    {
      id: 1,
      src: '../../../assets/img/1.png',
      title: 'Catan',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 2,
      src: '../../../assets/img/2.png',
      title: 'Dixit',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 3,
      src: '../../../assets/img/3.png',
      title: 'Dragonwood',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 4,
      src: '../../../assets/img/4.png',
      title: 'Hedbanz',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
  ];
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  slidesStoreSecond: any = [
    {
      id: 5,
      src: '../../../assets/img/5.png',
      title: 'SEQUENCE',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 6,
      src: '../../../assets/img/6.png',
      title: 'Ticket To Ride',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 7,
      src: '../../../assets/img/7.png',
      title: 'Pozimus',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 8,
      src: '../../../assets/img/8.png',
      title: 'Cluedo',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
  ];

  slidesStoreThird: any = [
    {
      id: 1,
      src: '../../../assets/img/1.png',
      title: 'Catan',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 2,
      src: '../../../assets/img/2.png',
      title: 'Dixit',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 3,
      src: '../../../assets/img/3.png',
      title: 'Dragonwood',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 4,
      src: '../../../assets/img/4.png',
      title: 'Hedbanz',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 5,
      src: '../../../assets/img/5.png',
      title: 'SEQUENCE',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 6,
      src: '../../../assets/img/6.png',
      title: 'Ticket To Ride',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 7,
      src: '../../../assets/img/7.png',
      title: 'Pozimus',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
    {
      id: 8,
      src: '../../../assets/img/8.png',
      title: 'Cluedo',
      description:'Catan, previously known as The Settlers of Catan or simply Settlers, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany by Franckh-Kosmos Verlag as Die Siedler von Catan.',
    },
  ];

  choseTitle(index: any) {
    this.chosenIndex = index;
    this.defChosen = false;
  }

}
