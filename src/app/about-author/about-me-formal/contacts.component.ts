import { Component, OnInit } from '@angular/core';
import { getOldYears } from '../../shared/years-utils';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  oldYears = getOldYears();

  constructor() { }

  ngOnInit() {
  }
}
