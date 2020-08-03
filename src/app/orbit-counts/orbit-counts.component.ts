import {Component, Input, OnInit} from '@angular/core';
import {Satellite} from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css'],

})
export class OrbitCountsComponent implements OnInit {
  title = 'Satellite Counts';

  satellitesType: string[] = [];

  constructor() {
  }

  @Input() satellites: Satellite[];

  ngOnInit() {
  }

  getTypes(){
    for (let i = 0; i < this.satellites.length; i++) {
      const type = this.satellites[i].type;
      if (!this.satellitesType.includes(type)) {
        this.satellitesType.push(type);
      }
    }
    return this.satellitesType;
  }

  countTypeOfSatellites(typeOfMission: string) {
    let counter: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.toLowerCase() === typeOfMission.toLowerCase()) {
        counter++;
      }
    }
    return counter;
  }
}
