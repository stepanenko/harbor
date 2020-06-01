
import { Component, OnInit } from '@angular/core';

import { StudentsService } from '../students.service';
import { Student } from '../models/student.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: Observable<Student[]>;
  oneStudent;
  selectedStudent: Student;

  constructor(private studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents();
    this.getStudent(1);
  }

  getStudents() {
    this.students = this.studentsService.getStudents();
      // .subscribe(students => this.students = students); // or use async pipe in html to render result data
  }

  getStudent(id): void {
    this.studentsService.getStudent(id)
      .subscribe(oneStudent => this.oneStudent = oneStudent);
  }

  selectStudent(student) {
    this.selectedStudent = student;
  }

}
