'use client'
import React, { useState } from 'react'
import { Poppins } from 'next/font/google'
import Separator from './Separator'
import { GetDate } from '@/helpers/GetDate'
import { Validate } from '@/helpers/Validate'

const poppinsB = Poppins({ subsets: ['latin'], weight: '400', style: 'italic' })

const DateInputs = ({ setFecha }) => {
  const [date, setDate] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    if (Validate(date)) {
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
          <small className={poppinsB.className}></small>
        </div>
        <div id='mes'>
          <span>MONTH</span>
          <input onChange={handleChange} type="number" name='month' className="w-full h-[60px] rounded-md text-[24px] px-3 mt-2 text-[#161313] ring-1 ring-[#716F6F] focus:outline-none" placeholder='MM' />
          <small className={poppinsB.className}></small>
        </div>
        <div id='anio'>
          <span>YEAR</span>
          <input onChange={handleChange} type="number" name='year' className="w-full h-[60px] rounded-md text-[24px] px-3 mt-2 text-[#161313] ring-1 ring-[#716F6F] focus:outline-none" placeholder='YYYY' />
          <small className={poppinsB.className}></small>
        </div>
      </div>
      <Separator />
    </form>
  )
}

export default DateInputs 
