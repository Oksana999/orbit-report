import {Component} from '@angular/core';
import {Satellite} from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';
  sourceList: Satellite[];
  displayList: Satellite[] = [];

  constructor() {
    this.sourceList = [];
    const satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function(response) {
      response.json().then(function(data) {

        let fetchedSatellites = data.satellites;
        // TODO: loop over satellites
        // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
        // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
        for (let i = 0; i < fetchedSatellites.length; i++) {
          let satellite = fetchedSatellites[i];
          this.sourceList.push(new Satellite(satellite.name, satellite.type,
            satellite.launchDate, satellite.orbitType,
            satellite.operational));
        }

        this.displayList = this.sourceList.slice(0);
      }.bind(this));
    }.bind(this));

  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for (let i = 0; i < this.sourceList.length; i++) {
      let satellite = this.sourceList[i];
      let name = satellite.name.toLowerCase();
      let type = satellite.type.toLowerCase();
      let orbitType = satellite.orbitType.toLowerCase();

      if (name.indexOf(searchTerm) >= 0 ||
        type.indexOf(searchTerm) >= 0 ||
        orbitType.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(satellite);
      }
    }
    // assign this.displayList to be the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;
  }
}
