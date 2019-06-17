import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Project } from '../api/project';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { untilComponentDestroyed } from '@w11k/ngx-componentdestroyed';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  @Input() project: Project;
  @Output() tagClicked = new EventEmitter<string>();

  currentLang = this.translate.currentLang;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.pipe(untilComponentDestroyed(this)).subscribe((event: LangChangeEvent) => this.currentLang = event.lang);
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
