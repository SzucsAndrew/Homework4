import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  @Input() results : Result[] = [];
  @Input() selectedIndex: number = -1;
  @Output() selectedIndexChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(index : number)
  {
    this.selectedIndexChange.emit(index);
  }
}
