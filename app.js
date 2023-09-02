const ITEM_INPUT = document.getElementById("marketListField");
const ADD_ITEM_BTN = document.getElementById("addItem-btn");
const RESET_LIST_BTN = document.getElementById("reset-list-btn")
const MARKET_LIST_CONTAINER = document.getElementById("marketListContainer");


//agregar event listener al boton para que capture el valor del input
//agregar el valor de input a un arreglo (puede ser arreglo de objetos)
//crear un elemento <li> de forma dinamica y agregarlo al padre <ul>


//luego...

//a cada elemento del arreglo crear un event listener de click que al momento de clickear agregue una clase que cambie el color y tache el texto.

let items;

if (localStorage.getItem("marketList")) {
    items = JSON.parse(localStorage.getItem("marketList"));
    items.forEach(item => {
        let ITEM = item;
        let LI_ITEM = document.createElement("li");
        LI_ITEM.textContent = ITEM;
        LI_ITEM.setAttribute("class", "list-item");
        MARKET_LIST_CONTAINER.appendChild(LI_ITEM);
        LI_ITEM.addEventListener("click", () => {
            LI_ITEM.classList.toggle("done");
        });
        items.push(ITEM);
        // localStorage.setItem("marketList", JSON.stringify(items));

    });

} else {
    items = [];
    // localStorage.setItem("marketList", JSON.stringify(items));

}



ADD_ITEM_BTN.addEventListener("click", () => {
    // let ITEM_ELEMENT = ITEM_INPUT;
    let ITEM = ITEM_INPUT.value;
    let LI_ITEM = document.createElement("li");
    LI_ITEM.textContent = ITEM;
    LI_ITEM.setAttribute("class", "list-item");
    MARKET_LIST_CONTAINER.appendChild(LI_ITEM);

    LI_ITEM.addEventListener("click", () => {
        LI_ITEM.classList.toggle("done");
    });
    items.push(ITEM);

    localStorage.setItem("marketList", JSON.stringify(items));

    // items = JSON.parse(localStorage.getItem("marketList"));


    ITEM_INPUT.value = "";

});



RESET_LIST_BTN.addEventListener("click", () => {
    // console.log(`Estos son mis items ${newItems}`);


    MARKET_LIST_CONTAINER.textContent = "";
    items = [];
    localStorage.removeItem("marketList");



});
items = JSON.parse(localStorage.getItem("marketList")) || [];
console.log(items);



//TODO: Arreglar estilos para los items en la lista
//TODO: Arreglar estilos para El boton agregar
//TODO: Arreglar estilos generales
//TODO: agregar validacion para NO recibir inputs vacios




// const myFunction = () => {
//     console.log("buuu!");
// }

const mensaje = "Gooooool!"

const myFunction = (texto) => {
    console.log(texto);
}

myFunction(mensaje)