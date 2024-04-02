import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nombre-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nombre-componente.component.html',
  styleUrl: './nombre-componente.component.scss'
})
export class NombreComponenteComponent {

  condition= true;
  nivel = 0;

  fondo() {
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    // Set the background color of the body
    document.body.style.backgroundColor = randomColor;
}

conditionFuntion(){
  this.condition = !this.condition;
}

nivelFuntion(valor: number){
  this.nivel =  this.nivel + valor;

  if(this.nivel >= 4){
    this.nivel = 4;
  }else if(this.nivel <= 0){
    this.nivel = 0;
  }

}






}
