import React from 'react'
import ArrowIcon from '@/components/icons/ArrowIcon'

const Separator = () => {
  return (
    <div className='grid grid-cols-7'>
      <hr className='relative top-12 col-span-6' />
      <div className='bg-[#854DFF] rounded-full w-20 h-20 flex place-content-center relative top-2'>
        <ArrowIcon className='relative top-4' />
      </div>
    </div>
  )
}

export default Separator
