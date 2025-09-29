import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  tasks: string[] = [];

  addTask(newTask: string) {
    if(newTask.trim()) {
      this.tasks.push(newTask.trim());
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
