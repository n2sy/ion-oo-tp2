import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
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
  private alertCtrl = inject(AlertController);
  private router = inject(Router);
  selectedCourse: any;
  constructor() {}

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('courseId');

    this.selectedCourse = this.courseSer.getCoursebyId(id);
    console.log(this.selectedCourse);
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Etes vous sûr de vouloir supprimer ce cours ?',
      buttons: [
        'Non',
        {
          text: 'Oui',
          handler: () => {
            this.courseSer.deleteCourse(
              this.activatedRoute.snapshot.paramMap.get('courseId'),
            );
            this.router.navigateByUrl('/');
          },
        },
      ],
    });

    await alert.present();
  }
}
