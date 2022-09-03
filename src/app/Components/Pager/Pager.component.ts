import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-Pager',
  templateUrl: './Pager.component.html',
  styleUrls: ['./Pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input() count: number | undefined;
  @Input() page: number | undefined;

  @Output() changePage = new EventEmitter<number>();
  @Output() next = new EventEmitter<number>();
  @Output() prve = new EventEmitter<number>();


  range: number[] = []

  constructor(
  ) { }

  ngOnInit() {
    if (this.count !== undefined)
      for (let index = 0; index < this.count; index++) {
        this.range.push(index + 1);
      }


  }

  onChangePage(page: number) {
    this.changePage.emit(page);
  }

  onNext() {
    this.next.emit();
  }

  onPrve() {
    this.prve.emit()
  }
  
  ShowFinishbutton(){
    
  }
}
