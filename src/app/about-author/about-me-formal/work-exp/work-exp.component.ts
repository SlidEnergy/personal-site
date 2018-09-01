import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.scss']
})
export class WorkExpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  get experience(): number {
    let ageDifMs = Date.now() - new Date(2009, 11, 30).getTime();
    let ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
