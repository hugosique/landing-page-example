import { Injectable } from '@angular/core';
import { I_Travel } from 'src/app/core/interfaces/travel';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  public travelDataService: I_Travel[] = [];

  constructor() { }

  createTravel(travel: I_Travel) {
    localStorage.setItem('tbTravel', JSON.stringify(travel));
  }
  
  getTravelList(): I_Travel[] {
    if(localStorage.getItem('tbTravel')) {
      this.travelDataService.push(JSON.parse(String(localStorage.getItem('tbTravel'))));

      localStorage.clear();
    };

    return this.travelDataService;
  }

  getTravelById(id: number): any {
    return this.travelDataService.find(travels => travels.id === id);
  }

  deleteTravel(id: number) {
    let index = this.travelDataService.findIndex(travels => travels.id === id);
    
    this.travelDataService.splice(index, 1);
  }

  updateTravel(id: number, travel: I_Travel) {
    let index = this.travelDataService.findIndex(element => element.id === id);
    
    this.travelDataService.splice(index, 1, travel);
  }
}
