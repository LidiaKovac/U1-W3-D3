const addTask = (submitEvent) => {
  //eseguita quando clicco il bottone o quando premo invio
  submitEvent.preventDefault() //non refresho
  // TODO: prendere il valore dell'input (quello che abbiamo scritto nell'input)
  const input = document.querySelector("input#task")
  //stessa cosa di: submitEvent.target.elements[0]
  // event > target > elements > input > value
  //TODO: mettere il valore dell'input nell'ul

  const ul = document.querySelector("ul")
  ul.innerHTML += `<li> 
    <span onclick='completa(event)'> ${input.value} </span> 
    <button onclick='elimina(event)'> ELIMINA </button> 
  </li>`
}

const completa = (clickEvent) => {
  clickEvent.target.classList.toggle("completo")
}

const elimina = (clickEvent) => {
  console.log(clickEvent) 
  clickEvent.target.parentElement.style.display = "none"
//   clickEvent.target.parentElement.remove()

//   console.log(clickEvent.target.closest("li"))
}
