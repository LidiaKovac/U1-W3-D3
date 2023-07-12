const aggiungiAppuntamento = (submitEvent) => {
  submitEvent.preventDefault() //ferma il refresh
  //TODO: prendere i dati di TUTTI GLI INPUT e metterli in un oggetto
  // * prendiamo il form
  const form = submitEvent.target //il form con cui stiamo interagendo
  //* prendiamo tutti gli input presenti
  const inputList = form.elements //areray di tutti gli input del form
  //inputList => [input, input, input, input]

  // TODO: Prendere l'input => prenderne il valore => salvarlo in un oggetto
  //? Ingredienti:
  // * Oggetto "nuovo appuntamento" OK
  // * Il valore dell'input OK
  // * id dell'input OK
  const appuntamento = {}
  for (let i = 0; i < inputList.length; i++) {
    if (inputList[i].tagName !== "BUTTON") {
      const valoreInput = inputList[i].value // |ciao!| => inputList[i].value "ciao!"
      const idInput = inputList[i].id // <input id='nome' /> .id => "nome"
      //? Breakdown iterazione per iterazione
      //i === 0, inputList[i] => input#nome
      //i === 1, inputList[i] => input#data

      // TODO: salvare nell'oggetto
      // * creiamo nell'oggetto una proprieta' con il nome === all'id dell'elemento
      // * se input.id === "nome", crediamo appuntamento.nome
      // * dentro questa proprieta' salviamo il valore dell'input
      appuntamento[idInput] = valoreInput
      //appuntamento["nome"]
      //appuntamento.nome
      // * se idInput === "nome", entro dentro appuntamento.nome e ci salvo il valore dell'input nome
    }
  }
  console.log(appuntamento)
  //TODO: renderizziamo gli appuntamenti
  const conferma = confirm("Sei sicuro?") //true o false
  if (conferma) {
    const container = document.querySelector(".appuntamenti")
    //?createElement
    const li = document.createElement("li")

    // const nome = prompt("Inserisci il tuo nome")
    li.innerText = `${appuntamento.nome} | ${appuntamento.data} | @${appuntamento.luogo}`
    li.style.backgroundColor = appuntamento.colore
    //genitore.appendChild(figlio)
    container.appendChild(li) //mette in fondo al container
    //?innerHTML
    //<div> INNERHTML </div>
    //<div> INNERTEXT </div>
    //   alert("Appuntamento creato")
  } else alert("Operazione annullata")
  //   container.innerHTML += `<li style='background-color: ${appuntamento.colore}'> ${appuntamento.nome} | ${appuntamento.data} | @${appuntamento.luogo} </li>`

}

// window.onunload = confirm("sei sicuro?")
