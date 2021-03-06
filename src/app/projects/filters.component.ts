import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TagsService} from './api/tags.service';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    providers: [TagsService],
    styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
    filterVisible = false;
    tagsByCategory: Observable<{ text: string, tags: string[] }[]>;
    mainCategories = [
        {
            text: 'projects.allProjects',
            tag: undefined
        },
        {
            text: 'projects.server',
            tag: 'server'
        },
        {
            text: 'projects.desktop',
            tag: 'desktop'
        },
        {
            text: 'projects.web',
            tag: 'web'
        }
    ];

    @Input() selectedTag?: string;

    @Output() tagClicked = new EventEmitter<string>();

    tag_click(value: string) {
        this.selectedTag = value;
        this.tagClicked.emit(value);
    }

    constructor(tagsService: TagsService) {
        this.tagsByCategory = tagsService.getTagsByCategory().pipe(
            map(sortedTags =>
                [
                    {text: 'projects.byWork', tags: sortedTags.byWork},
                    {text: 'projects.byProjectType', tags: sortedTags.byProjectType},
                    {text: 'projects.byLanguage', tags: sortedTags.byLanguage},
                    {text: 'projects.otherTags', tags: sortedTags.other}
                ]
            ));
    }

    ngOnInit() {
    }
}
