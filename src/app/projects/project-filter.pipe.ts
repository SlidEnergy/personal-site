import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project/project';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {

  transform(projects: Project[], category: string): Project[] {
    if (!projects) {
      return;
    }

    return projects.filter(project => project.category == category);
  }

}
