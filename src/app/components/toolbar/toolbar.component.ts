import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'src/app/shared/constants/app-routes.constants';

@Component({
  selector: 'st-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  routes = AppRoutes;

  constructor() { }

  ngOnInit(): void {
  }

}
