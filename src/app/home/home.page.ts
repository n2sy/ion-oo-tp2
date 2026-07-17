import { Component, inject } from '@angular/core';
import { GestionCours } from '../gestion-cours';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  courseSer = inject(GestionCours);
  constructor() {}
}
