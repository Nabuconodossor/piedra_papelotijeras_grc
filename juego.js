
// solicitar a user cantidad de juegos 
// solicitar a user opcion 

let nJuegos = parseInt(prompt("¿cuantos juegos deseas jugar"));

while (nJuegos > 0) {

    let opcionUser = parseInt (
        prompt(`
        (Bienvenido a piedra, papel o tijeras)
        Escribr el numero de tu jugada : 
        1- piedra 
        2 - papel 
        3 - tijeras
        `)
    );

    let opcionMaki = Math.floor(Math.random()  * (4-1) +   1);
    console.log(opcionMaki);

    console.log(ganador(opcionMaki, opcionUser));
    nJuegos = nJuegos - 1 ; 
}

function    ganador (opcionMaki, opcionUser){
    if(opcionMaki === 1 && opcionUser === 3){
        return "Perdiste";
    }
    if ( opcionMaki === 2 && opcionMaki === 1){
        return  "perdiste";
    }
    if ( opcionMaki === 3 && opcionMaki === 1){
        return  "perdiste";
    }
    if( opcionMaki === opcionUser) {
        return  "es un empate";
    }
    return " ganaste"
}


