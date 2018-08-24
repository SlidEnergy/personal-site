import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from './project';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<Project[]>('data/projects.json');
  }
}
