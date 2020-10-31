import React from 'react';
import ReactDOM from 'react-dom';

const Persona = { name: 'Juan' };
Persona ?.age;              //  Optional Chaining Operator (Comprueba si existe la propiedad en el objeto)
Persona && Persona .age;    //  Similar a Optional Chaining Operator

ReactDOM .render(
    <h2 style={{ color: "#61DBFB" }}>Hola Mundo usando React!</h2>,        // React createElement( 'h1', null, 'Hola Mundo usando React!' ),
    document .getElementById( 'app' )  
);