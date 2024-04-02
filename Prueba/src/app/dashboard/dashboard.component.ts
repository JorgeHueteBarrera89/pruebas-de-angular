import { CommonModule, NgSwitch } from '@angular/common';
import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { DashboardChildComponent } from './components/dashboard-child/dashboard-child.component';
import { NombreComponenteComponent } from './components/nombre-componente/nombre-componente.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule,DashboardChildComponent, NombreComponenteComponent,NgSwitch],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
 text = 'dashboard';

 handleClick(){
  this.text='dashboard text changed'
 }

}
