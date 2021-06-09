import { Injectable } from '@angular/core';

export interface Dato {
  nombre : string,
  apellidos: string,
  genero: string,
  descripcion: string,
  id: string,
}

@Injectable({
  providedIn: 'root'
})

export class DatosService {

  private datos : Array <Dato>  = [
       
        { id: '11', nombre: 'Fernado', apellidos: 'Ureña Gomez',
         genero:  'Hombre', descripcion: 'Instructor' }, 

        { id: '12', nombre: 'Maria', apellidos: 'Perez Almendro',
         genero:  'Mujer', descripcion: 'Amiga de la infancia.' },

        { id: '13', nombre: 'Federico', apellidos: 'Caballero Sanchez',
         genero: 'Hombre', descripcion: 'Compañero de trabajo.' } ]
    
  ;
    public getDatos  = () : Array<Dato> => {
    return this.datos;
  }

  constructor() { }
}
