import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class TagsService {

  constructor(private http: HttpClient) { }

  getTagsByCategory() {
    return this.http.get<{ [ket: string]: string[] }>('data/tags.json');
  }
}
