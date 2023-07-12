const aggiungiAppuntamento = (submitEvent) => {
  submitEvent.preventDefault() //ferma il refresh
  //TODO: prendere i dati di TUTTI GLI INPUT e metterli in un oggetto
  // * prendiamo il form
  const form = submitEvent.target //il form con cui stiamo interagendo
  console.log(form)
  //* prendiamo tutti gli input presenti
  const inputList = form.elements //areray di tutti gli input del form
  console.log(inputList)
  // Prendere l'input => prendere il valore => salvarlo in un oggetto
  //? Ingredienti:
  // * Oggetto "nuovo appuntamento" OK
  // * Il valore dell'input OK
  // * id dell'input

  //   Array.forEach(
  //     //array[i] => elemento singolo dell'array
  //     (elementoSingolo)=> {
  //         //codice del loop
  //     }
  //   )
  //inputList => [input, input, input, input]
  const appuntamento = {}
  /* 
    nome
    data
    luogo
    colore
  */
  for (let i = 0; i < inputList.length; i++) {
    if (inputList[i].tagName !== "BUTTON") {
      const valoreInput = inputList[i].value
      const idInput = inputList[i].id

      //i === 0, inputList[i] => input#nome
      //i === 1, inputList[i] => input#data
      // TODO: salvare nell'oggetto
      // * creiamo nell'oggetto una proprieta' con il nome === all'id dell'elemento
      // * se input.id === "nome", crediamo appuntamento.nome
      // * dentro questa proprieta' salviamo il valore dell'input
      appuntamento[idInput] = valoreInput
      // * se idInput === "nome", entro dentro appuntamento.nome e ci salvo il valore dell'input nome
    }
    console.log(appuntamento)
    //TODO: renderizziamo gli appuntamenti
  }
}
