import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import { Project } from './api/project';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@UntilDestroy()
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  galleryOptions: NgxGalleryOptions[];

  @Input() project: Project;
  @Output() tagClicked = new EventEmitter<string>();

  currentLang = this.translate.currentLang;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.pipe(untilDestroyed(this))
        .subscribe((event: LangChangeEvent) => this.currentLang = event.lang);
  }

  ngOnInit() {
    this.galleryOptions = [
      {
        imageSize: 'contain',
        imageArrows: this.project.images.length > 1,
        thumbnails: this.project.images.length > 1,
        width: '400px',
        height: '300px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 400
      {
        breakpoint: 400,
        width: '300px',
        height: '250px',
      }
    ];
  }

  ngOnDestroy() { }
}
