import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-caroussel',
  templateUrl: './section-caroussel.component.html',
  styleUrls: ['./section-caroussel.component.scss']
})
export class SectionCarousselComponent implements OnInit {

  images: object[] = [
    { id: 1, url: "https://www.festival-lesdeferlantes.com/wp-content/uploads/2019/11/Simple_Minds_cr%C3%A9dit-Dean-Chalkley-scaled.jpg" },
    { id: 2, url: "https://img.huffingtonpost.com/asset/5f1a00b8270000b10fe674d7.jpeg?cache=vM0RbxN9YX&ops=scalefit_630_noupscale" },
    { id: 3, url: "https://www.toutsurmesfinances.com/argent/wp-content/uploads/sites/3/2017/02/concert.jpg" },
    { id: 4, url: "https://c.ststat.net/content/fr/Sites/Digitick/images/og/MUSIC_OG.png" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
