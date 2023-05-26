'use client'
import DateCalc from '@/components/DateCalc'
import DateInputs from '@/components/DateInputs'
import { useState } from 'react'

const Home = () => {
  const [fecha, setFecha] = useState()

  return (
    <div className="min-h-screen grid place-content-center bg-[#DBDBDB]">
      <div className="bg-[#FFFFFF] w-[680px] h-[500px] rounded-xl rounded-br-[100px] p-8 ">
        <DateInputs setFecha={setFecha} />
        <DateCalc fecha={fecha} />
      </div>
    </div>
  )
}

export default Home
