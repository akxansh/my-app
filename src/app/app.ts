import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

export interface Task {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  tasks: Task[] = [];

  addTask(newTask: string) {
    if(newTask.trim()) {
      this.tasks.push({ text: newTask.trim(), completed: false });
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleCompleted(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
