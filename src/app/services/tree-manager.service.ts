import { Injectable } from '@angular/core';

@Injectable()
export class TreeManagerService {
  selectedNode;
  filteredText: String;
  hasDropped: Boolean;
  treeDat:any;
  nodeId:number;
  maxId:number;
  constructor() {
    this.selectedNode = '';
    this.maxId = 20;
  }

  getSelectedNode() {
    return this.selectedNode;
  }

  getFilteredText() {
    return this.filteredText;
  }

  getHasDropped() {
    return this.hasDropped;
  }

  getNewNode() {
    this.maxId+=1;
    return { id: this.maxId,text: 'new node',weight:10,skillset:'PM', subNodes: [], expanded: false };
  }

  setHasDropped(hasDropped) {
    this.hasDropped = hasDropped;
  }

  setSelectedNode(node) {
    this.selectedNode = node;
  }

  setFilteredText(text) {
    this.filteredText = text;
  }
  setDraggedParentAndNode(rootNode,id):void{
     this.treeDat = rootNode;
     this.nodeId = id;
  }

  getDraggedParentAndNode(){
    return {
      "Root": this.treeDat,
      "Id":this.nodeId
    }
  }
}
