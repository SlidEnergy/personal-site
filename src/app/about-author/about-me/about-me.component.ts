import { Component, OnInit } from '@angular/core';
import { getOldYears, getWorkExperienceYears } from '../../shared/years-utils';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  oldYears = getOldYears();
  workExperienceYears = getWorkExperienceYears();

  constructor() { }

  ngOnInit() {
  }
}
