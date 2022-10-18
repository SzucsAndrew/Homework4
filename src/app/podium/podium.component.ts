import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent implements OnInit {
  @Input() competitors! : string[];
  @Output() close = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closed(){
    this.close.emit(true);
  }
}
