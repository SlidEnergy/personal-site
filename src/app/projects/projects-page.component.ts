import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ProjectsPageService } from './projects-page.service';
import { Project } from './project/project';

import 'rxjs/add/operator/filter';
import { Category } from '../models/category';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  providers: [ProjectsPageService],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsPageComponent implements OnInit {
  projects$: Observable<Project[]>;
  selectedTag?: string;

  constructor(private httpService: ProjectsPageService) { }

  ngOnInit() {
    this.projects$ = this.httpService.getProjects();
  }
}
