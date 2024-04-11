//-----------------------------------------
// VARIABLES
//-----------------------------------------
// guardamos en una variable "allBoardImagesElements"
// tod os los elementos del DOM que sean  imagenes cuyo padre sea el elemento con clase "board"
// muestrala en consola



let allBoardImagesElements = document.querySelectorAll('.board img')
console.log("allBoardImagesElements",allBoardImagesElements)

// por cada elemento del array, 
// mostramos en consola su atributo "src"

// por cada elemento del array, 
// si clicado
// mostramos en consola su atributo "src" 
allBoardImagesElements.forEach( el => {
    el.addEventListener('click', function(){
        rellenaCartasElegidas(el)
        
    })
})

function rellenaCartasElegidas(el){
    const elUrl = el.src;
    const dataType = el.getAttribute('data-type')
    console.log(elUrl,dataType)
}







// busca en el DOM los 3 contenedores de las 3 cartas elegidas y guardalos en 3 variables
let chosenPersonElement =  document.getElementById('chosen-person')

let chosenWeaponElement =  document.getElementById('chosen-person')
let chosenRoomElement =   document.getElementById('chosen-person')
console.log("3 elemtos",chosenPersonElement,chosenWeaponElement, chosenRoomElement)

// ahora teneis que hacer que cuando se clique en una imagen, que se rellene la imagen de la carta elegida correspondiente
// carta 1 - person
// carta 2 - weapon 
// carta 3 - room 


//----------------------------------
// LOGICA JUEGO
//----------------------------------
// GENERAR UNA SOLUCIÓN RANDOM (ex: mrs White, with an Axe, in the Lounge)

// step 1
// creamos 3 arrays
let personArr = [];
let weaponArr = [];
let roomArr = [];

// step 2 
// lo rellenamos dinamicamente, no a mano
// iteramos por todo el listado de cartas 
// y según el data-type, pusheamos el data-name en su array correspondiente

// resultado deseado
// console.log("personArr",personArr)
// console.log("weaponArr",weaponArr)
// console.log("roomArr",roomArr)
// personArr = ['Mrs. white', 'Mrs. Peacock', 'Colonel Mustard'];
// weaponArr = ['Axe', 'Wrench', 'Rope'];
// roomArr = ['Lounge', 'Dining Room', 'Kitchen'];





// step 3
// generar un array de 3 elementos random  
// resultado deseado : x ej. 
// console.log("randomSolution es :", randomSolution);
// randomSolution es :['Mrs. Peacock', 'Axe', 'Kitchen']

// creamos una variable "randomSolution" que es un array


// por cada uno de estos array: 
// personArr = ['Mrs. white', 'Mrs. Peacock', 'Colonel Mustard'];
// weaponArr = ['Axe', 'Wrench', 'Rope'];
// roomArr = ['Lounge', 'Dining Room', 'Kitchen'];
// elegimos un elemento random y lo pusheamos en "randomSolution"


// LAST STEP
// cada vez que le damos al botón TRY
// Comprobamos si la respuesta del jugador es === a la randomSolution
// si es correcto, mostramos en el DOM un mensaje en verde
// si NO es correcto, mostramos en el DOM un mensaje en rojo


// añadimos a las imagenes de las cartas elegidas un campo "data-name" vacio
// lo rellenamos cada click, pasandole el data-name del elemento clickado
// usamo la misma función de antes "rellenaCartasElegidas"