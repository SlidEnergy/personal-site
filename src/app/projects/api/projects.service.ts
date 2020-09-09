import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import * as yaml from 'js-yaml';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {Project} from './project';

@Injectable()
export class ProjectsService {

    constructor(private http: HttpClient) {
    }

    getProjects(): Observable<Project[]> {
        return this.http.get('data/projects.yaml', {responseType: 'text'})
            .pipe(map(data => yaml.load(data)));
    }
}
