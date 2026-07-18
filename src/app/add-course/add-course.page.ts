import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
  standalone: false,
})
export class AddCoursePage {
  addCourseForm = new FormGroup({
    title: new FormControl(),
    author: new FormControl('Nidhal'),
    logo: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  constructor() {}

  submitHandler() {
    console.log(this.addCourseForm.value);
  }
}
