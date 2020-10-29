import { Component, OnInit } from '@angular/core';
import { faEnvelope, faCat, faCarrot, faBabyCarriage, faBath, faBeer } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-section-reseau',
  templateUrl: './section-reseau.component.html',
  styleUrls: ['./section-reseau.component.scss']
})
export class SectionReseauComponent implements OnInit {
  
  faEnvelope = faEnvelope
  faCat =faCat
  faCarrot = faCarrot
  faBabyCarriage =faBabyCarriage
  faBath = faBath
  faBeer=faBeer
  
  icons: object[] = [
    { id: 1, name: faEnvelope },
    { id: 2, name: faCat },
    { id: 3, name: faCarrot },
    { id: 4, name: faBabyCarriage },
    { id: 5, name: faBath },
    { id: 6, name: faBeer },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}