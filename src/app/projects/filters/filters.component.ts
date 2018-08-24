import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  selectedTag?: string;
  filterVisible = false;

  @Input('selectedTag') set selectedTagInput(value: string) {
    this.selectedTag = value;
  }

  @Output() selectedTagChange = new EventEmitter<string>();

  tag_click(value: string) {
    this.selectedTag = value;
    this.selectedTagChange.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }
}
