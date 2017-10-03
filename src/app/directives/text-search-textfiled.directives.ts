import { Component } from '@angular/core';
import { TreeManagerService } from '../services/tree-manager.service';

@Component({
  moduleId: __moduleName,
  selector: 'app-tree-search-textfield',
  templateUrl: 'text-search-textfield.directives.html'
})

export class TextSearchTextFieldComponent {
  value: any;
  constructor(private treeManagerService: TreeManagerService) { }

  filter(value) {
    this.treeManagerService.setFilteredText(value);
  }
}
