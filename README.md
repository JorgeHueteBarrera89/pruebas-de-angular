# pruebas-de-angular


##Instalar angualr:
```npm install -g @angular/cli```

##Inicializar proyecto:
```ng new --standalone NombreProyecto```
    #Routing: yes
    #Style: SCSS

##Crear componente:
```ng g c NombreComponente --standalone```

##Para trabajar con OnPush en el componente @Componet hay que añadir:
```changeDetection: ChangeDetectionStrategy.OnPush```


##Info varia:

    #standalone = Los componentes no hay que declararlos en NgModule uno a uno.
    #Angular cuenta con varios scripts internos para adaptar antiguos metodos con los nuevos de las nuevas updates

    #Lazy-loading para que no veas la carpeata private hasta que hagas login (Hace falta investigarlo mucho mas)
