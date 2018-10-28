
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentMenuComponent } from './student-menu/student-menu.component';
import { StudentsComponent } from './students.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StudentsListComponent,
    StudentDetailsComponent,
    StudentMenuComponent,
    StudentsComponent
  ]
})
export class StudentsModule { }
