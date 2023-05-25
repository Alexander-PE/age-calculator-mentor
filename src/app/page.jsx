import ArrowIcon from '@/components/icons/ArrowIcon'
import { Poppins } from 'next/font/google'

const poppinsA = Poppins({ subsets: ['latin'], weight: '800', style: 'italic' })
const poppinsB = Poppins({ subsets: ['latin'], weight: '400', style: 'italic' })

const Home = () => {
  return (
    <div className="min-h-screen grid place-content-center bg-[#DBDBDB]">
      <div className="bg-[#FFFFFF] w-[680px] h-[500px] rounded-xl rounded-br-[100px] p-8 ">

        <div className="grid grid-cols-4 gap-6 -mb-2">
          <div>
            <span>DAY</span>
            <input type="text" className="w-full h-[60px] rounded-md text-[24px] px-3 mt-2 text-[#161313] ring-1 ring-[#716F6F] focus:outline-none" placeholder='DD'/>
          </div>
          <div>
            <span>MONTH</span>
            <input type="text" className="w-full h-[60px] rounded-md text-[24px] px-3 mt-2 text-[#161313] ring-1 ring-[#716F6F] focus:outline-none" placeholder='MM'/>
          </div>
          <div>
            <span>YEAR</span>
            <input type="text" className="w-full h-[60px] rounded-md text-[24px] px-3 mt-2 text-[#161313] ring-1 ring-[#716F6F] focus:outline-none" placeholder='YYYY'/>
          </div>
        </div>

        <div className='grid grid-cols-7'> 
          <hr className='relative top-12 col-span-6'/>
          <div className='bg-[#854DFF] rounded-full w-20 h-20 flex place-content-center relative top-2'>
            <ArrowIcon className='relative top-4'/>
          </div>
        </div>

        <div className={`flex flex-col -space-y-10 text-[#161313] text-[83px] relative -top-5 ${poppinsA.className}`}>
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
        
      </div>
    </div>
  )
}

export default Home
