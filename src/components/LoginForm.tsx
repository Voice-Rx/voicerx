import Image from "next/image";
import logo from '../../public/logo-og.png';
import Link from "next/link";
import { MdLogin } from "react-icons/md";

const LoginForm  = () => {
    return(
        <div className="flex flex-col justify-end items-center h-screen">        
        <div className="flex flex-col h-screen justify-center items-center w-80">
            <Image
                className="mb-2" 
                src={logo}
                alt="voicerx-logo"
            />  
            <p className="mb-14 text-xs" >Voice Automated Prescription Generator</p>
            <div className="mb-4 w-full text-center">
                {/* <label className="block text-gray-800 text-sm mb-2">Staff/Doctor ID</label>
                <input 
                    type="text" 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    placeholder="Enter Staff/Doctor ID"
                /> */}
                <Link href="https://voicerx-demo.auth.ap-south-1.amazoncognito.com/login?client_id=7ktj344sl4o70l5441tqlgogtg&response_type=code&scope=email+openid+phone+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard">
                    <button className="bg-gray-900 hover:bg-gray-950 text-white text-sm py-2 px-4 rounded inline-flex items-center">
                        <span className="mr-1">Proceed to login</span>
                        <MdLogin />
                    </button>
                </Link>
            </div>          
        </div>
        <span className="fixed text-gray-800 bottom-0 text-xs pb-10">&copy; Copyright 2023 VoiceRx - Voice Automated Prescription Generator</span>
        </div>

    )
};

export default LoginForm;