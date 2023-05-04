import { MENU_SELECT_ITEMS } from './header-list.const';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public path = this.activatedRoute.snapshot.routeConfig?.path;

  public menuSelectList = MENU_SELECT_ITEMS;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    console.log(this.path)
  }

  public checkRoute(event: any): void {
    console.log(event);
  }

}
