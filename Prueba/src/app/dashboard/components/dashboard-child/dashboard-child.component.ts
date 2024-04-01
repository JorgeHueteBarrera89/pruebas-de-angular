import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './dashboard-child.component.html',
  styleUrl: './dashboard-child.component.scss'
})
export class DashboardChildComponent implements OnInit {
@Input() text: String;

constructor(){
  this.text='';
}

ngOnInit(): void {
    console.log('se inicializo el dashboard-child');


  }
}
