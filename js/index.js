/**
 * Quita las clases de validación de bootstrap de todos los inputs con la clase form-control
 */

function resetInputs(){
  document.querySelectorAll(".form-control").forEach(e => {
    e.classList.remove("is-valid")
    e.classList.remove("is-invalid")
  })
}

/**
 * Valida si un input se encuentra vacio o si no es un email valido
 * aplica la validación agregando clases de Bootstrap segun corresponda
 * 
 * @param {*} e obtiene el valor del input
 * @param {boolean} option activa la validación por email si se le indica true
 */

function checkInput(e, option) {
  const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (option) {
    if (!validateEmail.test(e.value)) {
      e.classList.remove("is-valid")
      e.classList.add("is-invalid")
    }
    else
    {
      e.classList.remove("is-invalid")
      e.classList.add("is-valid")
    }
  }
  else
  {
    if (!e.value) {
      e.classList.remove("is-valid")
      e.classList.add("is-invalid")
    }
    else
    {
      e.classList.remove("is-invalid")
      e.classList.add("is-valid")
    }
  }
}

/**
 * Cambiar el valor del select por el valor que se le pase por parametro
 * @param {string} value valor que se aplicara en el select del form
 */

function changeTicket(value) {
  document.querySelector('#category').value=value
}

/**
 * Calcula el valor del ticket segun la categoria elegida
 */

function calculatePrice(e) {
  //Obtengo los valores del form y valido el valor del descuento
  const category = {
    spectator: 0,
    student: 80,
    trainee: 50,
    junior: 15
  }
  
  const name = e.name.value
  const surname = e.surname.value
  const email = e.email.value
  const discount = category[e.category.value]
  const quantity = e.quantity.value

  //Valido si los campos requeridos son validos
  checkInput(e.name)
  checkInput(e.surname)
  checkInput(e.email, true)
  checkInput(e.quantity)

  //Si pasa la validación se realiza el calculo del precio final
  if (name && surname && email && quantity) {
    document.querySelector("#amount").innerText = "Total a Pagar: $"+ ((quantity * 200) - ((quantity * 200) * (discount / 100))) + " ARS"  
  }
}