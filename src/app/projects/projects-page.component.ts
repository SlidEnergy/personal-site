import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ProjectsPageService } from './projects-page.service';
import { Project } from './project/project.model';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  providers: [ProjectsPageService],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsPageComponent implements OnInit {

  projects: Observable<Project[]>;
  utilities: Observable<Project[]>;
  hobbies: Observable<Project[]>;

  constructor(private httpService: ProjectsPageService) { }

  ngOnInit() {
    this.httpService.getProjects().subscribe(data => {
      this.listByCategory(data);
    });
  }

  listByCategory(projectsList) {
    this.projects = projectsList.filter(item => item.category == 'project');
    this.utilities = projectsList.filter(item => item.category == 'utility');
    this.hobbies = projectsList.filter(item => item.category == 'hobby');
  }
}
