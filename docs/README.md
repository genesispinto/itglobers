<h1 align="center"> Boton de WhatsApp </h1>

Componente que renderiza un boton fijo en pantalla que permite al usuario comunicarse con la tienda 


![boton wp](https://user-images.githubusercontent.com/95322919/195887487-e4011d65-e7f1-4108-beeb-90d594028a22.png)
____________
## :hammer:Configuración del proyecto

- :pushpin: `Paso 1 - Configuración Básica`: 
  Asegurarse que esta en el ambiente correcto de vtex

- :pushpin: `Paso 2 - Clone estos archivos` con el link proporcionado en el repositorio 
- :pushpin: `Paso 3 - Instalacion de nodos de react`: 
  Ingresar a la carpeta de react ejecutando el comando en consola ```$ cd react```
  y dentro de esta instalar los nodos ejecutando en consola el comando ```$ yarn```
- :pushpin: `Paso 4 - Linkear app a su Tienda`: 
  Ejecute comando en consola ```$ vtex link```
  
  
 
  ________

## :key:Dependencias

1. Store-theme

```ruby
  "dependencies": 
  {
    "itglobers.whatsapp-button": "0.x"
  }
```
## :key:Manera de llamar al componente: 
Ejemplo:
```
"flex-layout.row#example":{
    "children":["whatsapp-button"]
    }
```

## :black_nib:Autor

 [<sub>Génesis Pinto</sub>](https://github.com/genesispinto) 
