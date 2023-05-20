export default function validate(userData) {
//   console.info(typeof userData.user.length)
  const errors = {}
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  if (!userData.user) errors.user = "Se Requiere una contraseña"
  if (userData.user.length < 6 || userData.user.length > 10) errors.user = "La contraseña debe tener entre 6 y 10 caracteres"
  if (!regexEmail.test(userData.password)) errors.password = "Debe ser un correo electrónico"
  // console.info(errors)
  return errors
}
