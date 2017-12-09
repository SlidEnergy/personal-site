import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { ProjectsService } from './projects.service';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ProjectsService],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  utilities;
  hobbies;

  constructor(private httpService: ProjectsService) { }

  ngOnInit() {
    this.httpService.getProjects().subscribe(data => {
      this.projects = data["projects"];
      this.utilities = data["utilities"];
      this.hobbies = data["hobbies"];
    });
  }

}
