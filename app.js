// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() { 
    const input = document.getElementById('amigo'); // Cajita donde escribo
    const nombre = input.value.trim(); // obtener el valor escrito en la cajita y quitarle los espacios en blanco

    if (nombre == '') { // Si el nombre está vacío
        alert('Por favor, ingresa un nombre válido.'); // Muestra un mensaje de alerta
        return; // Detiene la función
    }

    listaAmigos.push(nombre); // Agrega el nombre a la lista
    input.value = ''; // Limpia la cajita
    mostrarLista(); // Llama a la función para mostrar la lista actualizada
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos'); // Obtiene el elemento de la lista en el HTML
    lista.innerHTML = ''; // Limpia la lista antes de mostrarla

    listaAmigos.forEach((amigo) => { // Recorre cada amigo en la lista
        const li = document.createElement('li'); // Crea un nuevo elemento de lista
        li.textContent = amigo; // Establece el texto del elemento de lista al nombre
        lista.appendChild(li); // Agrega el elemento de lista al HTML
    });   
}

// Función para sortear y mostrar un amigo secreto aleatorio
function sortearAmigo() {
    // Si la lista está vacía, mostramos una alerta y salimos
    if (listaAmigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    // Generamos un número aleatorio entre 0 y la longitud de la lista menos 1
    const indice = Math.floor(Math.random() * listaAmigos.length);
    // Obtenemos el nombre del amigo secreto usando el índice aleatorio
    const amigoSecreto = listaAmigos[indice];
    // Mostramos el resultado en el elemento con id "resultado"
    document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSecreto}`;
}