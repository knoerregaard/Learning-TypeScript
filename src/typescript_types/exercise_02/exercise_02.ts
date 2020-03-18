// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 02 – types
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives: 
// • lib.dom.d.ts 
var doc : Document = document;

/* Container */
var container: HTMLElement = document.createElement('div');
container.id = "container"
container.innerHTML += "tekst her...";

/* button */
var but : HTMLButtonElement = document.createElement('button');
but.innerHTML += "Click...";
but.addEventListener("click", doSome);

/* input */
var input : HTMLInputElement = document.createElement('input');
input.value = "input tekst her";
input.type = "submit";
input.id = "inp_name";
input.addEventListener('focus', ()=>{input.value = ''});


/* capture click event */
var check : HTMLInputElement = document.createElement('input');
check.type = "checkbox";
check.value ="asd";
check.addEventListener('click', (e)=>{console.log(e.clientX)})

doc.body.appendChild(container);
doc.body.appendChild(input);
doc.body.appendChild(check);

function doSome() : void{
    alert("clicked")
}


window.onload = () =>{
    console.log(container);
}


