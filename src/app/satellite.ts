export class Satellite {
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;

  constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    this.launchDate = launchDate;
    this.name = name;
    this.orbitType = orbitType;
    this.type = type;
    this.operational = operational;
  }

  shouldShowWarning = function(): boolean {
    return this.type.toLowerCase() === 'Space Debris'.toLowerCase();
  };
}
