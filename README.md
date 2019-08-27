# DragDrop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

This project uses Angular material CDK drag and drop.
cdkDropList is a container of cdkDrops.
cdkDropList has many properties and method(@Input and @Output) and cdkDrop also has properties and method(@Input and @Output).
At the beginning of this project I have just used material guide code.
I have customized that the cdkDragListOrientation property of cdkDropList(from 'vertical' to 'horizontal'), but there is a problem with shaking of cdkDrag.
I solved this problem by setting min and max height of cdkDropList css.


  .done {
    .drag-list {
      padding: 10px;
      width: 100%;
      min-height: 100px;
      height: 250px;
      background-color: silver;
      overflow-y: hidden;
      overflow-x: scroll;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      .drag-item {
          display: inline-block;
          border-radius: 10px;
          border: 1px solid black;
          margin: 5px;
          margin-top: 20px;
          padding: 5px;
          width: 200px;
      }
    }
  }


  <div 
      cdkDropList #doneList="cdkDropList" [cdkDropListData]="dones" 
      [cdkDropListConnectedTo]="[todoList]" class="drag-list" (cdkDropListDropped)="drop($event)"
      cdkDropListOrientation="horizontal"
  >
