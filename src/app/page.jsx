import DateCalc from '@/components/DateCalc'
import DateInputs from '@/components/DateInputs'
import Separator from '@/components/Separator'
import { Poppins } from 'next/font/google'

const poppinsB = Poppins({ subsets: ['latin'], weight: '400', style: 'italic' })

const Home = () => {
  return (
    <div className="min-h-screen grid place-content-center bg-[#DBDBDB]">
      <div className="bg-[#FFFFFF] w-[680px] h-[500px] rounded-xl rounded-br-[100px] p-8 ">

        <DateInputs />
        <Separator />
        <DateCalc />
        
      </div>
    </div>
  )
}

export default Home
