import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  //usando Templeate inline
  template: '  <mat-toolbar color="primary">\n' +
    '    <span>My Store</span>\n' +
    '  </mat-toolbar>',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
