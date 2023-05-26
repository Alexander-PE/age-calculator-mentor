export function GetMonthDays(mes, año) {
  let fecha = new Date(año, mes - 1, 1);
  let ultimoDia = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate();
  return ultimoDia;
}