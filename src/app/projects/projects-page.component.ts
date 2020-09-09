import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ProjectsService } from './api/projects.service';
import { Project } from './api/project';

import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private httpService: ProjectsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => { this.selectedTag = fragment; });
    this.projects$ = this.httpService.getProjects();
  }

  tag_click(tag: string) {
    this.selectedTag = tag;
    this.router.navigate(['/projects'], { fragment: tag });
  }
}
