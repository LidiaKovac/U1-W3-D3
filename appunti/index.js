//!EVENTI
const saluta = (clickEvent) => {
  console.log(clickEvent)
}
// onkeyup
// prendere il valore degli input
const keyUpEs = () => {
  console.log("Quando lascio il pulsante")
}

const primoBottone = document.querySelector("button")
// Array.push()
// Array.pop()
//esempi di metodi
//HTMLElement.addEventListener(tipo di evento:String, azione da eseguire:Function)
primoBottone.addEventListener("click", () => {
  console.log("Ciao ma un po' diverso")
})
// primoBottone.onclick = saluta
//equivalente di scrivere onclick='saluta()' su HTML.
//Non si mettolo le parentesi perche' NON VOGLIO ESEGUIRE LA FUNZIONE, voglio dare il riferimento a JS.

// const buttons = document.querySelectorAll("button")
// //[btn, btn, btn, btn, btn, btn]
// console.log(buttons)
// for (let i = 0; i < buttons.length; i++) {
//   const buttonSingolo = buttons[i]
//   // buttonSingolo.addEventListener("click", saluta)
//   buttonSingolo.addEventListener("click", (clickEvent) => {
//     saluta(clickEvent)
//   })
// }

//!OGGETTO EVENT

const leggiContenuto = (keyboardEvent) => {
  // console.log(keyboardEvent)
  // keyboardEvent.target.value = keyboardEvent.target.value.toUpperCase()
  // console.log(keyboardEvent.target.value)
  //? se voglio fare qualcosa quando premo "Enter"
  // if(keyboardEvent.key === "Enter") {
  //   console.log(keyboardEvent.target.value)
  // }

  document.querySelector("h1").innerHTML = keyboardEvent.target.value
}

const cambiaColore = (changeEvent) => {
  console.log(changeEvent)
  document.querySelector("h1").style.color = changeEvent.target.value
}

//! FORMS
//? Come prenderli? 
//document.forms[0]
//document.querySelector("form")

//! Sintassi oggetti alternativa
// credenziali["nome"]
// const prop = "nome"
// credenziali[prop]
//equivalente di credenziali.nome

//ON SUBMIT => SUL FORM! :)
const login = (submitEvent) => {
  //refresh => comportamento di default
  submitEvent.preventDefault() //previene il default === non fa refreshare la pagina
  console.log(submitEvent.target) //oggetto che rappresenta il form
  // oggetto uguale a quello di document.querySelector("form"), ma il form SPECIFICO con cui abbiamo interagito
  const credenziali = {}
  console.log(submitEvent.target.elements) //Array di tutti gli input disponibili
  for (let i = 0; i < submitEvent.target.elements.length; i++) {
    const input = submitEvent.target.elements[i]
    console.log(input.id) //stampa gli id di tutti gli input
    credenziali[input.id] = input.value //credenziali.password, credenziali.email, credenziali.propic
    //? loop breakdown, iterazione per iterazione
    //i===0, input.id => "email" => credenziali.email = valore dell'input email
    //i===1, input.id => "password" => credenziali.password = valore dell'input
    //i===2, input.id => "propic" => credenziali.propic = valore dell'input
  }
  console.log(credenziali)

  //! Alternativa, se pochi input
  // const credenziali = {
  //   email: document.querySelector("input#email").value,
  //   password: document.querySelector("input#password").value
  // }
}
