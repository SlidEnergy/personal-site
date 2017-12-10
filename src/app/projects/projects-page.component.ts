import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { ProjectsPageService } from './projects-page.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss'],
  providers: [ProjectsPageService],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsPageComponent implements OnInit {

  projects;
  utilities;
  hobbies;

  constructor(private httpService: ProjectsPageService) { }

  ngOnInit() {
    this.httpService.getProjects().subscribe(data => {
      this.projects = data["projects"];
      this.utilities = data["utilities"];
      this.hobbies = data["hobbies"];
    });
  }

}
