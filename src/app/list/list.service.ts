import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ListItem } from './list-item';
import {Observable} from 'rxjs';

@Injectable()
export class ListsService {

  private url  = '../../assets/db.json';

  constructor(private httpClient: HttpClient) { }

  getLists(): Observable<ListItem[]> {
    return this.httpClient.get<ListItem[]>(this.url);
  }
}
