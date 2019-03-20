import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  systemDate: string;

  constructor() { }

  ngOnInit() {
    this.systemDate = new Date().toDateString();
  }

}
