'use client'
import { NextPage } from "next";
import Link from "next/link";
import { MdSearch } from "react-icons/md";
import { MdMic } from "react-icons/md";
import InputMask from "react-input-mask";

const RecordForm: NextPage = () => {
    return (
        <div className="lg:w-2/5 w-1/2 p-10 bg-gray-100 flex-none">            
            <form className="max-w-full mb-10">
                <label className="block mb-1 text-sm font-medium text-gray-700">Patient Id</label>
                <div className="relative">                    
                    <InputMask type="text" mask="PT/9999/9999" maskChar="-" alwaysShowMask={true} id="customInput" className="border border-gray-300 text-gray-900 text-xs rounded-lg focus:outline-none block w-full p-2.5" placeholder="Enter Patient Id" />
                    <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                            width="12.000000pt" height="12.000000pt" viewBox="0 0 32.000000 32.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                            fill="#ababab" stroke="none">
                            <path d="M32 292 c2 -4 36 -65 77 -136 l74 -129 18 34 c17 33 17 35 -1 64 -9
                            17 -36 63 -59 103 -40 68 -44 72 -77 72 -20 0 -34 -4 -32 -8z"/>
                            <path d="M205 248 c-9 -24 -19 -49 -22 -55 -3 -9 5 -13 25 -13 26 0 32 6 51
                            49 11 27 21 52 21 55 0 3 -13 6 -29 6 -25 0 -31 -6 -46 -42z"/>
                            </g>
                        </svg>
                    </div>                    
                </div>
                <span className="text-green-600 text-[11px] italic">*Patient Found! System Ready to record</span>
                    <div className="flex justify-start items-start mt-2 gap-x-2 gap-y-2 flex-wrap">
                    <Link href="#">
                        <button className="bg-blue-600 hover:bg-blue-800 text-white text-xs py-2 px-4 rounded inline-flex items-center">
                            <MdSearch />
                            <span className="ml-1">Search Patient</span>
                        </button>
                    </Link>
                    {/* <Link href="#">
                        <button className="bg-teal-950 hover:bg-teal-900 text-white text-xs py-2 px-4 rounded inline-flex items-center">
                            <MdMic />
                            <span className="ml-1">Record</span>
                        </button>
                    </Link> */}
                </div>
            </form>
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Last Prescription Transcript</label>
                <textarea rows={20} className="block p-2.5 w-full text-xs text-gray-900 rounded-lg border border-gray-300 focus:outline-none" readOnly placeholder="Transcript Appears here...">

                </textarea>
            </div>
        </div>
    )
}

export default RecordForm;