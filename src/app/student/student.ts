import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {


  name = "Dhanush"
  Course="JavaFullStack"
  Age=20
  Fees=50000


  isActive= false;

  toggleActive() 
  {
    this.isActive=true
   console.log("hello");
}

  //Two-way binding
  userInput: string = '';



  }




  
