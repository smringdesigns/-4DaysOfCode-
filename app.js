// Bienvenida
alert("¡Bienvenido al juego de adivinar un número!");

// Define el número a adivinar (entre 0 y 10).
let numeroMaximoPosible = 10;
let numeroAdivinar = Math.floor(Math.random() * numeroMaximoPosible) + 1; // Puedes cambiar este valor entre 0 y 10
let numeroUsuario = 0;
let intentos = 1; 
let maximosIntentos = 3;

// Muestra en consola el numero de la maquina
console.log(numeroAdivinar);

// Codigo principal del juego
while (numeroUsuario != numeroAdivinar) {
    numeroUsuario = parseInt(prompt(`Piensa y escribe un número entre 0 y ${numeroMaximoPosible}. ¡Vamos, intenta adivinarlo!`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroAdivinar) {
        // Acertamos, fue verdadera la condición
        alert(`Acertaste el numero es:  ${numeroUsuario}.  Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroAdivinar) {
            alert("El número adivinar, es menor.");
        } else {
                alert("El número adivinar, es mayor.")
        }
        // Incrementamos el contador cuando no acierta
        // intentos = intentos + 1;
        // intentos += 1;
        intentos++;

        // palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
};
