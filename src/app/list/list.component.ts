import { Component, OnInit } from '@angular/core';

import { ListsService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private systemDate: string;
  listItems = [];

  constructor(private listsService: ListsService) {}

  ngOnInit() {
    this.systemDate = new Date().toDateString();
    this.listsService.getLists().subscribe(data => this.listItems = data);
  }

}
