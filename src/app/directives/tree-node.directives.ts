import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TreeManagerService } from '../services/tree-manager.service';
import { NodeSearchPipe } from '../pipes/node-search.pipes';

@Component({
  selector: 'app-tree-node',
  templateUrl: 'tree-node.directives.html',
  styleUrls: ['tree-node.directives.css'],
})

export class TreeNodeComponent {
  @Input() children;
  @Input() customClasses;
 // @Input() treeData;
  @Output() askedChildDeletion = new EventEmitter();

  expanded: boolean;
  constructor(private treeManagerService: TreeManagerService) { }

  addNewNode(node) {
    console.log('newNode:', node);
    node.subNodes = [...node.subNodes, this.treeManagerService.getNewNode()];
    node.expanded = true;
  }

  hasChevronDown(child) {

    return child!=undefined && child.subNodes.length !== 0 && child.expanded;
  }

  hasChevronRight(child) {
    return child!=undefined && child.subNodes.length !== 0 && !child.expanded;
  }

  onDragStart(event, child,rootNode) {
    this.treeManagerService.setDraggedParentAndNode(rootNode,child.id);
    this.treeManagerService.setSelectedNode(child);
  }

  onDragEnd(event, child) {
    if (this.treeManagerService.getHasDropped()) {
      this.treeManagerService.setHasDropped(false);
      this.children.splice(this.children.indexOf(child), 1);
    }
  }

  deleteNode(node) {
    this.children.splice(this.children.indexOf(node), 1);
  }

  getFilteredText() {
    this.treeManagerService.getFilteredText();
  }

  onDrop(event,node) {
    let isChecked:Boolean;
    isChecked = false;
    var subnode = {
      text: 'Moved Node',
          subNodes: [
          ],
       expanded: false
    };
  console.log("Node");
  console.log(node);
  console.log("Parent");
  let nodeData = this.treeManagerService.getDraggedParentAndNode();
  console.log(nodeData.Root);
  console.log(nodeData.Id);
 // this.IterateArray(treeDat,this.treeManagerService.getSelectedNode().id)
  this.IterateArray(nodeData.Root,nodeData.Id);
  let text = this.treeManagerService.getSelectedNode().text;
   console.log("Text");
   console.log(text);
   node.subNodes = [...node.subNodes, this.treeManagerService.getSelectedNode()];
/*  if (this.treeManagerService.getSelectedNode() !== node) {
      this.treeManagerService.setHasDropped(true);
      node.subNodes = [...node.subNodes, this.treeManagerService.getSelectedNode()];
    }*/
  }

  toggle(child) {
    child.expanded = !child.expanded;
  }

  IterateArray(parentArray,id):void{
    console.log("Parrent Array");
    console.log(parentArray);
    for(var iter=0;iter<parentArray.length;iter++){
      if(parentArray[iter].id == id){
        parentArray.splice(iter,1);
       // delete parentArray[iter];
        //console.log(parentArray[iter]);
        break;
      }
      else if(parentArray[iter].subNodes.length > 0){
        console.log("inside after")
        this.IterateArray(parentArray[iter].subNodes,id);
      }
    }
  }
}

/*
for(var iter =0;iter<treeDat.length;iter++){
    if(!isChecked){

     if(treeDat[iter].text == text){
        console.log("inside"+text);
        treeDat.splice(iter,1);
        isChecked = true;
        this.children = treeDat;
     }
     else if(treeDat[iter].subNodes.length > 0){
       console.log("value");
        for(var jIter=0;jIter<treeDat[iter].subNodes.length;jIter++){
             if(treeDat[iter].subNodes[jIter].text == text){
               console.log(treeDat[iter].subNodes[jIter]);
               console.log(text);
               treeDat[iter].subNodes.splice(jIter,1);
               isChecked = true;
              // this.children = treeDat;
               break;
        }
     }
    }
    }
     
  }
*/