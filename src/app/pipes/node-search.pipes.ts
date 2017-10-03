import { Pipe, PipeTransform } from '@angular/core';
import { TreeManagerService } from '../services/tree-manager.service';

@Pipe({
  name: 'nodeSearchPipe',
  pure: false
})

export class NodeSearchPipe implements PipeTransform {
  constructor(private treeManager: TreeManagerService) {
  }

  isBlank(obj: any): boolean {
    return obj === undefined || obj === null;
  }


  transform(values: any[]) {
    const filteredText = this.treeManager.getFilteredText();

    if (this.isBlank(filteredText)) {
      return values;
    } else {
      return this.filterNodeArray(values, filteredText);
    }
  }

  filterNodeRecursively(node, filteredText) {
    if (this.matches(node, filteredText)) {
      return true;
    }
    if (node.subNodes) {
      return this.filterNodeArray(node.subNodes, filteredText).length > 0;
    } else {
      return this.matches(node, filteredText);
    }
  }

  filterNodeArray(nodes, filteredText) {
    if (nodes) {
      return nodes.filter((node) => this.filterNodeRecursively(node, filteredText));
    }
  }

  matches(node, filteredText) {
    return node.text.toLowerCase().indexOf(filteredText.toLowerCase()) !== -1;
  }
}
