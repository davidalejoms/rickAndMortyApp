

export default function validate(userData) {
  //   console.info(typeof userData.user.length)
  const errors = {}
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  //   USER
  // el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
  if (!regexEmail.test(userData.user)) errors.user = "Debe ser un correo electrónico"
  // el nombre de usuario no puede tener más de 35 caracteres.
  if (userData.user.length > 35) errors.user = "No puede exceder los 35 caracteres"
  // el nombre de usuario no puede estar vacío.
  if (userData.user.length === 0) errors.user = "Se Requiere un Usuario"

  //   PASSWORD
  // la contraseña tiene que tener una longitud entre 6 y 10 caracteres.
  if (userData.password.length < 6 || userData.password.length > 10) errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
  // la contraseña tiene que tener al menos un número.
  if (!/\d/.test(userData.password)) errors.password = "La contraseña debe tener al menos un numero"
  // la contraseña no puede estar vacía.
  if (userData.password.length === 0) errors.password = "Se Requiere una Contraseña"

  // console.info('ERRORS',errors)
  return errors
}
