# EVENTI, RECAP:

## COME APPLICARE GLI EVENTI?

- HTML `onclick='fn(event)'`, `onkeyup='fn(event)'`
- JS `Element.addEventListener("tipo di evento", fn)`
- JS `Element.onclick = fn`

## COS'E' L'OGGETTO "event"?

- Oggetto che rappresenta l'interazione dell'utente
- **Click** => cosa ho cliccato, se ho cliccato con il mouse, se ho cliccato con la penna, in quale parte della pagina, posizione dell'elemento etc...
- **KeyUp** => su quale input ho scritto, se stavo premento shift, ctrl, etc., cosa ho scritto, il pulsante premuto (Enter, Backspace, "c").

## PROPRIETA' IMPORTANTI:

- (Element.addEventListener)

- `Event.target` => L'elemento con cui ho interagito
- `Event.target.value` => Il contenuto dell'input (event.target.value)
- `KeyboardEvent.key` => il pulsante premuto

## FORMS

```html
<form onsubmit="login(event)">
  <input type="email" id="email" placeholder="email" />
  <input type="password" id="password" placeholder="password" />
  <input type="file" id="propic" />

  <button>Click</button>
  <!-- button tipo submit -->
</form>
```

- onsubmit => click button[type='submit'], oppure Enter, VA INSERITO SUL FORM!

- SubmitEvent.target => il form che abbiamo submittato
- Form.elements => Array di tutti gli input, tipo `[<input/>, <input/>, <input/>]`
- Form.reset() => svuota tutti i campi

---

- DOM => Document Object Model
- BOM => Browser Object Model