import { GetMonthDays } from '@/helpers/GetMonthDays'

export const Validate = (date) => {
  let validation = true
  const dia = document.getElementById('dia')
  const mes = document.getElementById('mes')
  const anio = document.getElementById('anio')
  const inputs = document.querySelectorAll("input");

  inputs.forEach(i => {
    const parent = i.parentElement;
    console.log(i.value)
    if(!i.value){
      parent.querySelector("small").innerText = "this field is required."
      i.classList.add('ring-[#FF5757]')
      validation = false
    }else if (date.month > 12) { 
      mes.querySelector('small').innerText = 'Must be a valid month'
      mes.querySelector('input').classList.add('ring-[#FF5757]')
      validation = false
    }else if (GetMonthDays(date.month, date.year) < date.days) {
      dia.querySelector('small').innerText = 'Must be a valid date'
      dia.querySelector('input').classList.add('ring-[#FF5757]')
      validation = false
    }else if (date.year > new Date().getFullYear()) {
      anio.querySelector('small').innerText = 'Must be in the past'
      anio.querySelector('input').classList.add('ring-[#FF5757]')
      validation = false
    }else{
      i.classList.remove('ring-[#FF5757]')
      parent.querySelector("small").innerText = ""
      validation = true
    }
  })

  return validation
}