'use client'
import React, { useState } from 'react'
import { Poppins } from 'next/font/google'
import Separator from './Separator'
import { GetDate } from '@/helpers/GetDate'
import { GetMonthDays } from '@/helpers/GetMonthDays'

const poppinsB = Poppins({ subsets: ['latin'], weight: '400', style: 'italic' })

const DateInputs = ({ setFecha, setError, error }) => {
  const [date, setDate] = useState({})


  const validate = () => {
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
        validation = false
      }else if (date.month > 12) {
        mes.querySelector('small').innerText = 'Must be a valid month'
        validation = false
      }else if (GetMonthDays(date.month, date.year) < date.days) {
        dia.querySelector('small').innerText = 'Must be a valid date'
        validation = false
      }else if (date.year > new Date().getFullYear()) {
        anio.querySelector('small').innerText = 'Must be in the past'
        validation = false
      }else{
        parent.querySelector("small").innerText = ""
        validation = true
      }
    })

    return validation
  }

  const handleSubmit = e => {
    e.preventDefault()

    if(validate()){
      const fecha = `${date.year}-${date.month}-${date.days}`
      setFecha(GetDate(fecha))
    }
  }

  const handleChange = e => {
    setDate({
      ...date,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-4 gap-6 -mb-2">
        <div id='dia'>
          <span>DAY</span>
          <input onChange={handleChange} type="number" name='days' className="w-full h-[60px] rounded-md text-[24px] px-3 mt-2 text-[#161313] ring-1 ring-[#716F6F] focus:outline-none" placeholder='DD' />
          <small></small>
        </div>
        <div id='mes'>
          <span>MONTH</span>
          <input onChange={handleChange} type="number" name='month' className="w-full h-[60px] rounded-md text-[24px] px-3 mt-2 text-[#161313] ring-1 ring-[#716F6F] focus:outline-none" placeholder='MM' />
          <small></small>
        </div>
        <div id='anio'>
          <span>YEAR</span>
          <input onChange={handleChange} type="number" name='year' className="w-full h-[60px] rounded-md text-[24px] px-3 mt-2 text-[#161313] ring-1 ring-[#716F6F] focus:outline-none" placeholder='YYYY' />
          <small></small>
        </div>
      </div>
      <Separator />
    </form>
  )
}

export default DateInputs 
