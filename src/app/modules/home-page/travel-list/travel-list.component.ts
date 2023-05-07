import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {

  public travelList: any[] = [
    {
      name: 'Hugo Otávio Silva de Siqueira',
      plan: 'Russia/Ukraine',
      value: 250,
    },
    {
      name: 'Michael Jackson de Oliveira',
      plan: 'Nova Iorque',
      value: 350,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
