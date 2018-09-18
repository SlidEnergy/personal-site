import { Component, OnInit } from '@angular/core';
import { getWorkExperienceYears } from '../../../shared/years-utils';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.scss']
})
export class WorkExpComponent implements OnInit {

  workExperienceYears = getWorkExperienceYears();

  constructor() { }

  ngOnInit() {
  }
}
