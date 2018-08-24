import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project/project';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(projects: Project[], tag: string): Project[] {
    if (!projects) {
      return;
    }

    if (!tag) {
      return projects;
    }

    return projects.filter(project => project.tags.includes(tag));
  }

}
