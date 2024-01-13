// VALORAR UNA PELICULA E INGRESAR DATOS AMIGO PARA RECOMENDAR

let pelicula//defino pelicula para que sea variable global

do {//bucle para comprobar que pelicula tenga una cadena string 
    pelicula = prompt("Qué pelicula viste?"); //pregunta al usuario por pelicula
} while (pelicula === null || pelicula === "")
let valorar = confirm("Querés valorar la pelicula " + pelicula + "?"); //pregunta al usuario si quiere hacer una valoracion
let numero //defino numero para que sea variable global
while (valorar) { //bucle while para que repita hasta que entre a un case y valorar se vuelva false
    numero = parseInt(prompt("Cuántas estrellas le pones del 1 al 5?")) // variable numero parseado para que lo que ingrese 
    switch (numero) {
        case 1:
            alert("Le diste 1 estrella")
            valorar = false
            break;
        case 2:
            alert("le diste 2 estrellas")
            valorar = false
            break;
        case 3:
            alert("le diste 3 estrellas")
            valorar = false
            break;
        case 4:
            alert("le diste 4 estrellas")
            valorar = false
            break;
        case 5:
            alert("le diste 5 estrellas")
            valorar = false
            break;
        default:
            alert("Ingreso inválido, valorá del 1 al 5")
            break;
    }
}
//bucle if para que si el puntaje es mayor a 2, pregunte si quiere recomendar
if (numero > 2) {
    //funcion recomendar con argumento pelicula para poder usarlo en confirm
    recomendar(pelicula);
}
function recomendar(pelicula) {

    let recomendarias = confirm("Querés recomendar " + pelicula + "a un amigo?")//pregunta si quiere recomendar
    if (recomendarias) {
        do {
            let nombreAmigo = prompt("Ingresá el nombre de tu amigo") //Pide nombre del amigo 
            let mailAmigo = prompt("Ingresá el mail de tu amigo") //Pide mail del amigo
        } while (nombreAmigo === null || nombreAmigo === "" || mailAmigo === null || mailAmigo === "")
    }
}
alert("Muchas gracias por tu tiempo!!!")
