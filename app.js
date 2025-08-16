// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creando una variable para la lista de amigos
let amigos = []

// Implementando una funcion para capturar la entrada de nombre
function agregarAmigo(nombre) {
    //Capturando el nombre del amigo de la entrada del usuario
    nombre = document.getElementById("amigo").value;
    // Verificando si el campo de entrada está vacío
    if (nombre.trim() === "") {
        //mostrando un mensaje de error
        alert("Por favor, ingresa un nombre.");
        return;
    }
    // Verificando si el nombre ya existe en la lista
    if (amigos.includes(nombre)) {
        alert("El nombre ya existe en la lista de amigos.");
    } else {
        // Agregando el nombre a la lista de amigos
        amigos.push(nombre);
        console.log(`Amigo ${nombre} agregado exitosamente.`);
    }
    // Limpiando el campo de entrada
    document.getElementById("amigo").value = "";
    //mostrando la lista actualizada de amigos en la interfaz de usuario
    document.getElementById("listaAmigos").innerHTML =`Tu lista de amigos es:  ${amigos.join(", ")}`;
}

// Implementando ua funcion para sortear un amigo
function sortearAmigo() {
    // Verificando si la lista de amigos está vacía
    if (amigos.length === 0) {
        alert("La lista de amigos está vacía. Por favor, agrega al menos un amigo.");
        return;
    }
    // Generando un índice aleatorio para seleccionar un amigo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    // Mostrando el nombre del amigo seleccionado en la consola
    console.log(`El amigo seleccionado es: ${amigoSeleccionado}`);
    // Mostrando el nombre del amigo seleccionado en la interfaz de usuario
    document.getElementById("resultado").innerHTML = `El amigo seleccionado es: ${amigoSeleccionado}`;
}


