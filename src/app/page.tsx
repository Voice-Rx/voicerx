import { NextPage } from 'next';
import Image from 'next/image';
import logoWhite from '../../public/logo_white.png';
import { MdLogin } from "react-icons/md";
import { FaAws, FaGithub, FaUser } from "react-icons/fa";
import Link from 'next/link';
import { TbBrandNextjs } from "react-icons/tb";
import { SiApachecassandra, SiGraphql, SiMysql, SiRabbitmq, SiTailwindcss } from "react-icons/si";


const Home: NextPage = () => {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className='mt-12 px-0 mx-5 md:px-10 md:mx-10 md:mt-16'>
        <div className='flex flex-col items-start justify-center px-1 mx-2 md:px-10 md:mx-10'>
          <Image           
            src={logoWhite}
            alt="Logo"
            width={250}
          />
          <div className='mt-6 mb-6 text-white text-sm text-left bg-slate-900 px-4 py-6 rounded-lg bg-opacity-30 md:px-6'>            
            🚀 Under Development 🚀
            <br />
            <p className='mt-4'>
              Welcome to VoiceRx, a groundbreaking voice-activated prescription generator designed to elevate the prescription process in healthcare. Our platform leverages the power of AWS cloud services, ensuring scalability, reliability, and, most importantly, adherence to HIPAA compliance and security standards. With VoiceRx, healthcare professionals can seamlessly generate prescriptions through intuitive voice commands, making the prescription process efficient, secure, and in line with the highest industry standards.
            </p> 
            <div className='flex justify-start items-center text-white mt-3 text-2xl flex-wrap'>
              <FaAws className='text-3xl mr-9' />
              <TbBrandNextjs className='mr-9' />
              <SiRabbitmq className='text-xl mr-9' />
              <SiGraphql className='mr-9' />
              <SiTailwindcss className='mr-9 mt-2 sm:mt-0' />
              <SiApachecassandra className='text-3xl mr-9 mt-2 sm:mt-0' />
              <SiMysql className='text-4xl mt-2 sm:mt-0' />

            </div>      
          </div>
          {/* <div className="flex flex-col justify-center items-start mb-6 px-1"> */}
            <div className="flex justify-between items-center mb-2 bg-gray-800 px-3 py-1 rounded-full text-white text-sm mb-2">
              <FaGithub />
              <Link className='ml-2' href="https://github.com/Voice-Rx/voicerx">Github</Link>
            </div>
            <div className='flex justify-start items-center mb-6 flex-wrap'>
              <div className="flex justify-between items-center bg-gradient-to-r from-teal-900 to-cyan-900 px-3 py-1 rounded-full text-white text-xs">
                <FaUser />
                <Link className='ml-2' href="https://github.com/saumyasarkar11">saumyasarkar11</Link>
              </div>
              <div className="ml-2 flex justify-between items-center bg-gradient-to-r from-teal-800 to-sky-800 px-3 py-1 rounded-full text-white text-xs">
                <FaUser />
                <Link className='ml-2' href="https://github.com/debam-roy10">debam-roy10</Link>
              </div>
              <div className="mt-1 sm:mt-0 sm:ml-2 flex justify-between items-center bg-gradient-to-r from-sky-900 to-indigo-800 px-3 py-1 rounded-full text-white text-xs">
                <FaUser />
                <Link className='ml-2' href="https://github.com/rajarshi20122001">rajarshi20122001</Link>
              </div>
            </div>
            
          {/* </div> */}
          
          <Link href="/login" className='mb-12'>
            <button type="button" className="text-cyan-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2"><span className="flex justify-between items-center"><p>Proceed to login</p>&nbsp;<MdLogin /></span></button>
          </Link>
          {/* <div className=" mt-10 inset-0 bottom-0 text-xs">&copy; Copyright 2023 VoiceRx - Voice Automated Prescription Generator</div> */}
        </div>
        
           
      </div>   
      
    </div>
    
  )
}

export default Home;