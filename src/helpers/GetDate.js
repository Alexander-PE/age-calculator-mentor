export function GetDate(fecha) {
  let fechaActual = new Date();
  let fechaPasada = new Date(fecha);

  let year = fechaActual.getFullYear() - fechaPasada.getFullYear();
  let month = fechaActual.getMonth() - fechaPasada.getMonth();
  let days = fechaActual.getDate() - fechaPasada.getDate();

  if (days < 0) {
    month--;
    let ultimosDiasMesPasado = new Date(fechaPasada.getFullYear(), fechaPasada.getMonth() + 1, 0).getDate();
    days += ultimosDiasMesPasado;
  }
  if (month < 0) {
    year--;
    month += 12;
  }

  return {year, days, month};
}