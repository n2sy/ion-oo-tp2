import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionCours {
  private allCourses = [
    {
      id: 1,
      title: 'Ionic',
      author: 'Abderrahem Ben Harb',
      keywords: ['mobile', 'hybride', 'js'],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/LogoIonic.png',
    },
    {
      id: 2,
      title: 'Angular',
      author: 'Bilel Mouihbi',
      keywords: ['component', 'directive', 'routing'],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Angular-logo.png',
    },
    {
      id: 3,
      title: 'React',
      author: 'Siwar Sahraoui',
      keywords: ['props', 'jsx', 'context'],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1280px-React_Logo_SVG.svg.png',
    },
  ];

  getAllCourses() {
    return this.allCourses;
  }

  getCoursebyId(courseId) {
    return this.allCourses.find((course) => course.id == courseId);
  }
}
