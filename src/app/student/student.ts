import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './student.html',
  styleUrls: ['./student.css']
})
export class StudentComponent {

  student = {
    name: '',
    course: '',
    age: 0,
    fees: 0,
    joiningDate: '',
    isActive: false
  };

  toggleActive() {
    console.log("Button clicked");
    this.student = {
      name: 'Dhanush',
      course: 'JavaFullStack',
      age: 20,
      fees: 50000,
      joiningDate: '2025-07-24',
      isActive: true
    };
  }

  // Two-way binding
  userInput: string = '';
}
