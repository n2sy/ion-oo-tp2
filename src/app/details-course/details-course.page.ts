import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GestionCours } from '../gestion-cours';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.page.html',
  styleUrls: ['./details-course.page.scss'],
  standalone: false,
})
export class DetailsCoursePage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private courseSer = inject(GestionCours);
  selectedCourse: any;
  constructor() {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('courseId');

    this.selectedCourse = this.courseSer.getCoursebyId(id);
    console.log(this.selectedCourse);
  }
}
