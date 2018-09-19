import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../api/project';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  @Input() project: Project;
  @Output() tagClicked = new EventEmitter<string>();

  currentLang = this.translate.currentLang;

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.galleryOptions = [
      {
        imageSize: 'contain',
        imageArrows: this.project.images.length > 1,
        thumbnails: this.project.images.length > 1,
        width: '300px',
        height: '250px',
        thumbnailsColumns: 3,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];
  }

}
