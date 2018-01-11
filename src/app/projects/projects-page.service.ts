import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Project } from './project/project';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class ProjectsPageService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return <Observable<Project[]>>this.http.get('data/projects.json').share();
  }
}
