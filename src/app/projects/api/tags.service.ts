import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TagsService {

  constructor(private http: HttpClient) { }

  getTagsByCategory() {
    return this.http.get<{ [ket: string]: string[] }>('data/tags.json');
  }
}
