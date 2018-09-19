import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Project } from './project';

import * as yaml from 'js-yaml';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get('data/projects.yaml', { responseType: 'text' }).map(data => yaml.load(data));
  }
}
