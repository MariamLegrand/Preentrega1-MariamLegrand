// VALORAR UNA PELICULA E INGRESAR DATOS AMIGO PARA RECOMENDAR

let pelicula//defino pelicula para que sea variable global

do {//bucle para comprobar que pelicula tenga una cadena string 
    pelicula = prompt("¿Cuál fue la última pelicula que viste?"); //pregunta al usuario por pelicula
} while (pelicula === null || pelicula === "")
let valorar = confirm("¿Te gustaría valorar " + '"' + pelicula + '"' + "?"); //pregunta al usuario si quiere hacer una valoracion
let numero //defino numero para que sea variable global
while (valorar) { //bucle while para que repita hasta que entre a un case y valorar se vuelva false
    numero = parseInt(prompt("¿Que puntuación le darías del 1 al 5? Siendo: \n 1 - Muy mala \n 2 - Mala \n 3 - Buena \n 4 - Muy buena \n  5 - Excelente")) // variable numero parseado para que lo que ingrese 
    switch (numero) {
        case 1:
            alert("Gracias, tu puntuación fue 1.")
            valorar = false
            break;
        case 2:
            alert("Gracias, tu puntuación fue 2.")
            valorar = false
            break;
        case 3:
            alert("Gracias, tu puntuación fue 3.")
            valorar = false
            break;
        case 4:
            alert("Gracias, tu puntuación fue 4.")
            valorar = false
            break;
        case 5:
            alert("Gracias, tu puntuación fue 5.")
            valorar = false
            break;
        default:
            alert("Ingreso inválido, elegí del 1 al 5")
            break;
    }
}
//bucle if para que si el puntaje es mayor a 2, pregunte si quiere recomendar
if (numero > 2) {
    //funcion recomendar con argumento pelicula para poder usarlo en confirm
    recomendar(pelicula);
}
function recomendar(pelicula) {

    let recomendarias = confirm("¿Te gustaría recomendar " + '"' + pelicula + '"' + " a un amigo?")//pregunta si quiere recomendar
    if (recomendarias) {
        do {
            let nombreAmigo = prompt("Ingresá el nombre de tu amigo") //Pide nombre del amigo 
            let mailAmigo = prompt("Ingresá el mail de tu amigo") //Pide mail del amigo
        } while (nombreAmigo === null || nombreAmigo === "" || mailAmigo === null || mailAmigo === "")
    }
}
alert("¡Muchas gracias por tu tiempo!")
