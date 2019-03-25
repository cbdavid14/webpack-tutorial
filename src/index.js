import Persona from './persona'
import jQ from 'jquery'

const david = new Persona();

const lst = david.saluda();

lst.forEach(element => {
    jQ("#lstPersonas").append('<h1>' + element.nombre + '</h1>')
});
