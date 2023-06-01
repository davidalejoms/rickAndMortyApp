export const FORM_DATA = "FORM_DATA"
// const
// const

export function enviarForm(payload) {
  return { type: FORM_DATA, payload: payload }
}
