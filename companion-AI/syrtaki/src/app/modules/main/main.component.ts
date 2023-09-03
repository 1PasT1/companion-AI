import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  // @ts-ignore

  chosenIndex: number = -1;
  defChosen: boolean = true;
  ngOnInit(): void {

  }
  slidesStore: any = [
    {
      id: 1,
      src: '/assets/img/пе-e1689937028637-fotor-20230728161841.png',
    },
    {
      id: 2,
      src: '/assets/img/277291315_509339724087745_6772757857673628723_n.jpg',
    },
    {
      id: 3,
      src: '/assets/img/357107358_280082017862749_175586619828625337_n.jpg',
    },

  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  slidesStoreSecond: any = [
    {
      id: 1,
      src: '/assets/img/music img.jpg',
    },
    {
      id: 2,
      src: '/assets/img/music img 2.jpg',
    },
    {
      id: 3,
      src: '/assets/img/music img 3.jpg',
    },

  ];


  choseTitle(index: any) {
    this.chosenIndex = index;
    this.defChosen = false;
  }

}
 