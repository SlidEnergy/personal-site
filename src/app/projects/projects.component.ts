import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { ProjectsService } from './projects.service';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsService]
})
export class ProjectsComponent implements OnInit {

  project: Project;

  constructor(private httpService: ProjectsService) { }

  ngOnInit() {
    this.httpService.getProjects().subscribe((data: Project) => this.project = data);
  }

}
