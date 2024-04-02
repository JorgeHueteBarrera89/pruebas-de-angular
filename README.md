# pruebas-de-angular

## Instalar angualr:
``npm install -g @angular/cli``

## Inicializar proyecto:
``ng new --standalone NombreProyecto``
    #Routing: yes
    #Style: SCSS

## Crear componente:
``ng g c NombreComponente --standalone``

## Para trabajar con OnPush en el componente @Componet hay que añadir:
``changeDetection: ChangeDetectionStrategy.OnPush``

## Elementos de interes
Solo me muestro si el valor de ngIf es true:
```<div *ngIf="ValorBooleano">Solo me muestro si el "ngIf" es true</div>```

Crea un div nuevo por cada elemento de un Array (Un div por que en este caso es el contenedor de ngFor):
```<div *ngFor="let item of NombreArray"> {{NombreArray}} </div>```

"ng-container" sirve para que no se reitere un contenedor al usar ngFor:

    #<ul>
    #   <ng-container *ngFor="let item of NombreArray">
    #       <li>{{NombreArray}}</li>
    #   </ng-container>
    #</ul>


No se pueden combinar "ngIf" y "ngFor" en una misma linea, pero si que se puede combinar asi:

    #<ul>
    #   <ng-container *ngFor="let item of NombreArray">
    #       <li *ngIf="ValorBooleano"> {{NombreArray}} </li>
    #   </ng-container>
    #</ul>


"ngSwitch" y "ngSwitchCase" sirve para seleccionar un "item" en concreto:

    #   <ng-container [ngSwitch]="NombreOpcionSelecionada">
    #       <div *ngSwitchCase="'Opcion1'">Soy la opcion 1</div>
    #       <div *ngSwitchCase="'Opcion2'">Soy la opcion 2</div>
    #       <div *ngSwitchCase="'Opcion2'">Soy la opcion 2</div>
    #   </ng-container>


## Info varia:

    #standalone = Los componentes no hay que declararlos en NgModule uno a uno.
    #Angular cuenta con varios scripts internos para adaptar antiguos metodos con los nuevos de las nuevas updates

    #Lazy-loading para que no veas la carpeata private hasta que hagas login (Hace falta investigarlo mucho mas)
