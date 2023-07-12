//!EVENTI
const saluta = (clickEvent) => {
  console.log("CIAOOOO!")
  console.log(clickEvent)
}
// onkeyup
// prendere il valore degli input
const keyUpEs = () => {
  console.log("Quando lascio il pulsante")
}

//addEventListener

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

// const sum  = (a,b) => {
//     return a+b
// }

// sum(2,3)

const leggiContenuto = (keyboardEvent) => {
  // console.log(keyboardEvent)
  // keyboardEvent.target.value = keyboardEvent.target.value.toUpperCase()
  // console.log(keyboardEvent.target.value)
  // if(keyboardEvent.key === "Enter") {
  //   console.log(keyboardEvent.target.value)
  // }

  document.querySelector("h1").innerHTML = keyboardEvent.target.value

  //Event.target => L'elemento con cui abbiamo interagito
  // click => button
  // Event {
  //   target: {
  //    il mio bottone
  // },
  //....
  // }
  //keyup => input
  /* 
    Event {
      target: {
        ...
        value: "" => IL CONTENUTO DELL'INPUT
      },
      ...
      key: ""
    }


  */
}

const cambiaColore = (changeEvent) => {
  console.log(changeEvent)
  document.querySelector("h1").style.color = changeEvent.target.value
}

//!EVENTI, RECAP:

//? COME APPLICARE GLI EVENTI?
/* 
- HTML onclick='fn(event)', onkeyup='fn(event)'
- JS Element.addEventListener("tipo di evento", fn)
- JS Element.onclick = fn
*/

//? COS'E' L'OGGETTO "event"?

/* 
  Oggetto che rappresenta l'interazione dell'utente
  Click => cosa ho cliccato, se ho cliccato con il mouse, 
  se ho cliccato con la penna, in quale parte della pagina,
  posizione dell'elemento etc... 
  KeyUp => su quale input ho scritto, se stavo premento shift, ctrl, etc., 
  cosa ho scritto, il pulsante premuto (Enter, Backspace, "c").
*/

//? PROPRIETA' IMPORTANTI:
/* 
  Element.addEventListener*

  Event.target => L'elemento con cui ho interagito 
  Event.target.value => Il contenuto dell'input (event.target.value)
  KeyboardEvent.key => il pulsante premuto

*/

//! FORMS

//document.forms[0]
//document.querySelector("form")

//!
// credenziali["nome"]
// const prop = "nome"
// credenziali[prop]
//equivalente di credenziali.nome

//ON SUBMIT => SUL FORM! :)
const login = (submitEvent) => {
  //refresh => comportamento di default
  submitEvent.preventDefault()
  //previene il default === non fa refreshare la pagina
  //submitEvent => il submit, click o invio
  //submitEvent.target => il form che abbiamo submittato
  //submitEvent.target.elements => Array di tutti gli input presenti nel form
  console.log(submitEvent.target) //oggetto che rappresenta il form 
  // document.querySelector("form")
  const credenziali = {}
  console.log(submitEvent.target.elements)
  for (let i = 0; i < submitEvent.target.elements.length; i++) {
    const input = submitEvent.target.elements[i]
    console.log(input.id)
    // credenziali.input.id
    credenziali[input.id] = input.value //credenziali.password, credenziali.email, credenziali.propic
    //i===0, input.id => "email" => credenziali.email = valore dell'input email
    //i===1, input.id => "password" => credenziali.password = valore dell'input
    //i===2, input.id => "propic" => credenziali.propic = valore dell'input
  }
  console.log(credenziali)

  // const credenziali = {
  //   email: document.querySelector("input#email").value,
  //   password: document.querySelector("input#password").value
  // }


}

//! PROPRIETA' DEL FORM
/*   
  onsubmit => click button[type='submit'], oppure Enter, VA INSERITO SUL FORM! :)

  SubmitEvent.target => il form che abbiamo submittato
  Form.element => Array di tutti gli input, tipo [<input/>, <input/>, <input/>]

  */
