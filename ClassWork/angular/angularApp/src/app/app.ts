import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../home/home';
import { AddStudent } from '../add-student/add-student';
import { StudentList } from '../student-list/student-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, AddStudent,StudentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angularApp');
}
