import { Component, OnInit } from '@angular/core';
import { getEducationYears } from '../../shared/years-utils';

@Component({
  selector: 'app-about-me-formal',
  templateUrl: './about-me-formal.component.html',
  styleUrls: ['./about-me-formal.component.scss']
})
export class AboutMeFormalComponent implements OnInit {

  educationYears = getEducationYears();

  constructor() { }

  ngOnInit() {
  }

}
