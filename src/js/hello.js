function say () {
    const msg = 'Vamos avanzando con Webpack! :)';

    console .log( 'say', msg );
    document .getElementById( 'app' ) .innerText = msg;
}

export default say;