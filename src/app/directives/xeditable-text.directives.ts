import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-editable-text',
  templateUrl: 'xeditable-text.directives.html',
  styleUrls: ['xeditable-text.css']
})

export class XeditableTextComponent implements OnInit {
  @Input() node;
  isEditable: boolean;
  constructor() { }
  setEditable(isEditable) {
    this.isEditable = isEditable;
  }

  ngOnInit() {
    this.isEditable = false;
  }
}
