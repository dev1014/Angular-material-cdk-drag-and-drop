import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  toDoes = [
    {
      title: 'Get to work',
      name: 'kim',
      country: 'usa',
      age: 23
    },
    {
      title: 'Pick up groceries',
      name: 'ri',
      country: 'usa',
      age: 25
    },
    {
      title: 'Go home',
      name: 'chae',
      country: 'usa',
      age: 24
    },
    {
      title: 'Fall asleep',
      name: 'pak',
      country: 'usa',
      age: 23
    }
  ]
  dones = [
    {
      title: 'Get up',
      name: 'kim',
      country: 'usa',
      age: 23
    },
    {
      title: 'Brush teeth',
      name: 'ri',
      country: 'usa',
      age: 25
    },
    {
      title: 'Take a shower',
      name: 'chae',
      country: 'usa',
      age: 24
    },
    {
      title: 'Check e-mail',
      name: 'pak',
      country: 'usa',
      age: 23
    },
    {
      title: 'Walk dog',
      name: 'pak',
      country: 'usa',
      age: 23
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
