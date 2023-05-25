import React from 'react'
import { Poppins } from 'next/font/google'

const poppinsA = Poppins({ subsets: ['latin'], weight: '800', style: 'italic' })

const DateCalc = () => {
  return (
    <div className={`flex flex-col -space-y-10 text-[#161313] text-[80px] relative -top-5 ${poppinsA.className}`}>
      <p>
        <strong>36 </strong>
        years
      </p>
      <p>
        <strong>8 </strong>
        months
      </p>
      <p>
        <strong>36 </strong>
        days
      </p>
    </div>
  )
}

export default DateCalc
