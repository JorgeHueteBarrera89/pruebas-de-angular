import { ChangeDetectionStrategy, Component, Input, OnInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './dashboard-child.component.html',
  styleUrl: './dashboard-child.component.scss'
})
export class DashboardChildComponent implements OnInit {
@Input() text: String = '';



ngOnChanges(changes: SimpleChanges): void {
console.log('se cambio el dashboard-child', changes);

}
ngOnInit(): void {
    console.log('se inicializo el dashboard-child');


  }
}
