import { TravelService } from 'src/app/shared/services/travel.service';
import { Component, OnInit } from '@angular/core';
import { I_Travel } from 'src/app/core/interfaces/travel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  public travelList: I_Travel[] = [];

  constructor(
    private travelService: TravelService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  public getList(): void {
    this.travelList = this.travelService.getTravelList();
  }

  public editTravel(id: any): void {
    this.router.navigate([`registration/edit/${id}`]);
  }

  public deleteTravel(id: any): void {
    this.travelService.deleteTravel(id);
  }

}
