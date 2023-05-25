export function GetDate(fecha) {
  let today = new Date();
  let pastDate = new Date(fecha);

  let year = today.getFullYear() - pastDate.getFullYear();
  let month = today.getMonth() - pastDate.getMonth();
  let days = today.getDate() - pastDate.getDate();

  if (days < 0) {
    month--;
    let lastDaysMonthPasts = new Date(pastDate.getFullYear(), pastDate.getMonth() + 1, 0).getDate();
    days += lastDaysMonthPasts;
  }
  if (month < 0) {
    year--;
    month += 12;
  }

  return {year, days, month};
}