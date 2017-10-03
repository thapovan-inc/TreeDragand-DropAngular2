import { Component, OnInit } from '@angular/core';
import { TreeNodeComponent, TextSearchTextFieldComponent } from '../directives';

@Component({
  moduleId: __moduleName,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  data = [];

  customClasses = {
    plusIcon: 'glyphicon glyphicon-plus pull-right',
    minusIcon: 'glyphicon glyphicon-minus pull-right',
    chevronRightIcon: 'glyphicon glyphicon-chevron-right',
    chevronDownIcon: 'glyphicon glyphicon-chevron-down'
  };

  ngOnInit(): void {
   this.data = [
    {
      id:1,
      text: 'Design Basics & GA Drgs',
      weight:100,
      skillset:'SE,PM',
      subNodes:[

      ],
      expanded: false,
      parentId:0
    },
    {
      id:2,
      text: 'Design of piles',
      weight:30,
      skillset:'SE,PM,JE',
      subNodes: [
        {
          id:3,
          text: 'Study of Geotech Data',
          weight:20,
          skillset:'SE,PM,JE',
          subNodes: [
            {
              id:4,
              text: 'Caln of Spring Constants',
              weight:12,
              skillset:'JE',
              subNodes: [],
              expanded: false,
              parentId:3
            },
            {
              id:4,
              text: 'Pile Capacity Calculation',
              weight:8,
              skillset:'JE,DM',
              subNodes: [],
              expanded: false,
              parentId:3
            }
          ],
          expanded: true,
          parentId:2
        }],
        expanded: true,
        parentId:0
       },
        {
          id:5,
          text: 'Design Calns',
          weight:40,
          skillset:'SE,PM,JE,DM',
          subNodes: [
            {
              id:6,
              weight:15,
              skillset:'JE,DM',
              text: 'Load Calcualtion',
              subNodes: [{
                  id:7,
                  weight:8,
                  skillset:'DM',
                  text: 'Equipment Loads',
                  subNodes:[

                 ],
                  expanded: false,
                  parentId:6
              },
              {
                  id:8,
                  weight:7,
                  skillset:'DM',
                  text: 'Wave,current&Seimsmic',
                  subNodes:[

                 ],
                  expanded: false,
                  parentId:6
              }
              ],
              expanded: true,
              parentId:5
            }],
             expanded: true,
              parentId:0
        },
          {
              
              id:9,
              weight:30,
              skillset:'SE,PM,DM',
              text: 'Structural Design',
              subNodes: [
                  {
                  id:10,
                  weight:18,
                  skillset:'JE,DM',
                  text: 'Design of cross beam',
                  subNodes:[

                 ],
                  expanded: false,
                  parentId:9
              },
              {
                  id:11,
                  weight:12,
                  skillset:'DM',
                  text: 'Detailing of cross beam',
                  subNodes:[

                 ],
                  expanded: false,
                  parentId:9              }
              ],
              expanded: false,
              parentId:0
       }
      
   ];
  }
 public toggleSubMenuValue(node):void{
   console.log(node);console.log("we are inside");
 }
  saveTree(): void {
      console.log(this.data);
  }
}
