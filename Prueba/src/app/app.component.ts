import { NombreComponenteComponent } from './dashboard/components/nombre-componente/nombre-componente.component';
import { NgIf, NgSwitch } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf,RouterOutlet, DashboardComponent,NombreComponenteComponent,NgSwitch],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Prueba';
}
