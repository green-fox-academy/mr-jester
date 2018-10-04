import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'toDoDragAndDrop';
  public todo: Todo[] = [
    { title: 'Relax abit', dateAdded: new Date().toString() },
    { title: 'eat dinner', dateAdded: new Date().toString() },
    { title: 'cook dinner', dateAdded: new Date().toString() },
    { title: 'code and code again', dateAdded: new Date().toString() }
  ];

  public done: Todo[] = [
    { title: 'WakeUp', dateAdded: new Date().toString() },
    { title: 'go to work', dateAdded: new Date().toString() },
    { title: 'return home', dateAdded: new Date().toString() }
  ];

  public cancel: Todo[] = [];

  addItem(list: string, todo: string) {
    if (list === 'todo') {
      this.todo.push({ title: todo, dateAdded: new Date().toString() });
    } else {
      this.done.push({ title: todo, dateAdded: new Date().toString() });
    }
  }
  drop(event: CdkDragDrop<Todo[]>) {
    if (event.previousContainer === event.container){
      moveItemInArray(event.container.data,event.previousIndex,event.currentIndex);
    }else{
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);
    }
  }
}
