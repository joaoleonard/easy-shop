export function currentConverter(value) {
  var formato = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }

  return value.toLocaleString('pt-BR', formato)
}
