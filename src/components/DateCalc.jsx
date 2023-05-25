import React from 'react'
import { Poppins } from 'next/font/google'

const poppinsA = Poppins({ subsets: ['latin'], weight: '800', style: 'italic' })

const initialState = {
  year: '--',
  month: '--',
  days: '--',
}

const DateCalc = ({fecha = initialState}) => {
  return (
    <div className={`flex flex-col -space-y-10 text-[#161313] text-[80px] relative -top-5 ${poppinsA.className}`}>
      <p>
        <strong>{fecha.year} </strong>
        years
      </p>
      <p>
        <strong>{fecha.month} </strong>
        months
      </p>
      <p>
        <strong>{fecha.days} </strong>
        days
      </p>
    </div>
  )
}

export default DateCalc
