import React from 'react'

const DateInputs = () => {
  return (
    <div className="grid grid-cols-4 gap-6 -mb-2">
      <div>
        <span>DAY</span>
        <input type="text" className="w-full h-[60px] rounded-md text-[24px] px-3 mt-2 text-[#161313] ring-1 ring-[#716F6F] focus:outline-none" placeholder='DD' />
      </div>
      <div>
        <span>MONTH</span>
        <input type="text" className="w-full h-[60px] rounded-md text-[24px] px-3 mt-2 text-[#161313] ring-1 ring-[#716F6F] focus:outline-none" placeholder='MM' />
      </div>
      <div>
        <span>YEAR</span>
        <input type="text" className="w-full h-[60px] rounded-md text-[24px] px-3 mt-2 text-[#161313] ring-1 ring-[#716F6F] focus:outline-none" placeholder='YYYY' />
      </div>
    </div>
  )
}

export default DateInputs
