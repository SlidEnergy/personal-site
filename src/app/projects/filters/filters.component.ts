import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TagsService } from '../api/tags.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  providers: [TagsService],
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  selectedTag?: string;
  filterVisible = false;
  tagsByCategory: Observable<{ text: string, tags: string[] }[]>;
  mainCategories = [
    {
      text: 'Все проекты',
      tag: undefined
    },
    {
      text: 'Desktop',
      tag: 'desktop'
    },
    {
      text: 'Web (full-stack)',
      tag: 'web'
    },
    {
      text: 'Другие (gamedev)',
      tag: 'gamedev'
    }
  ];

  @Input('selectedTag') set selectedTagInput(value: string) {
    this.selectedTag = value;
  }

  @Output() selectedTagChange = new EventEmitter<string>();

  tag_click(value: string) {
    this.selectedTag = value;
    this.selectedTagChange.emit(value);
  }

  constructor(tagsService: TagsService) {
    this.tagsByCategory = tagsService.getTagsByCategory().map(sortedTags =>
      [
        { text: 'По месту работы', tags: sortedTags.byWork },
        { text: 'По типу проектов', tags: sortedTags.byProjectType },
        { text: 'По языку программирования', tags: sortedTags.byLanguage },
        { text: 'Другие теги', tags: sortedTags.other }
      ]
    );
  }

  ngOnInit() {
  }
}
