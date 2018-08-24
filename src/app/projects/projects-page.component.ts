import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProjectsService } from './api/projects.service';
import { Project } from './api/project';

import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  providers: [ProjectsService],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsPageComponent implements OnInit {
  projects$: Observable<Project[]>;
  selectedTag?: string;

  constructor(private httpService: ProjectsService) { }

  ngOnInit() {
    this.projects$ = this.httpService.getProjects();
  }
}
