import { NextPage } from 'next';
import Image from 'next/image';
import logoWhite from '../../public/logo_white.png';
import { MdLogin } from "react-icons/md";
import { FaGithub, FaUser } from "react-icons/fa";
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className='mt-20 px-10 mx-10'>
        <div className='flex flex-col items-start justify-between px-20 mx-10'>
          <Image           
            src={logoWhite}
            alt="Logo"
            width={250}
          />
          <div className='mt-6 mb-6 text-white text-sm text-left bg-slate-900 px-9 py-6 rounded-lg bg-opacity-30'>            
            🚀 Under Development 🚀
            <br />
            <p className='mt-4'>
              Welcome to VoiceRx, a groundbreaking voice-activated prescription generator designed to elevate the prescription process in healthcare. Our platform leverages the power of AWS cloud services, ensuring scalability, reliability, and, most importantly, adherence to HIPAA compliance and security standards. With VoiceRx, healthcare professionals can seamlessly generate prescriptions through intuitive voice commands, making the prescription process efficient, secure, and in line with the highest industry standards.
            </p>          
          </div>
          <div className="flex flex-col justify-center items-start mb-6">
            <div className="flex justify-between items-center mb-2 bg-gray-800 px-3 py-1 rounded-full text-white text-sm">
              <FaGithub />
              <Link className='ml-2' href="https://github.com/Voice-Rx/voicerx">Github</Link>
            </div>
            <div className='flex justtify-start items-center'>
              <div className="flex justify-between items-center bg-gradient-to-r from-teal-900 to-cyan-900 px-3 py-1 rounded-full text-white text-xs">
                <FaUser />
                <Link className='ml-2' href="https://github.com/saumyasarkar11">saumyasarkar11</Link>
              </div>
              <div className="ml-2 flex justify-between items-center bg-gradient-to-r from-teal-800 to-sky-800 px-3 py-1 rounded-full text-white text-xs">
                <FaUser />
                <Link className='ml-2' href="https://github.com/debam-roy10">debam-roy10</Link>
              </div>
              <div className="ml-2 flex justify-between items-center bg-gradient-to-r from-sky-900 to-indigo-800 px-3 py-1 rounded-full text-white text-xs">
                <FaUser />
                <Link className='ml-2' href="https://github.com/rajarshi20122001">rajarshi20122001</Link>
              </div>
            </div>
            
          </div>
          
          <Link href="/login">
            <button type="button" className="text-cyan-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"><span className="flex justify-between items-center"><p>Proceed to login</p>&nbsp;<MdLogin /></span></button>
          </Link>
          {/* <div className=" mt-10 inset-0 bottom-0 text-xs">&copy; Copyright 2023 VoiceRx - Voice Automated Prescription Generator</div> */}
        </div>
        
           
      </div>   
      
    </div>
    
  )
}

export default Home;