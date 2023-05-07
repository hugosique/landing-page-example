import { MENU_SELECT_ITEMS } from './header-list.const';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
  ) { }

  public ngOnInit(): void {
    
  }

  public navigate(path: string): void {
    this.router.navigate([path]);
  }

}
