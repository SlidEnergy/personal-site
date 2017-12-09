import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get('data/projects.json')
  }
}
