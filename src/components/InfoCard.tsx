import Image from "next/image";
import Link from "next/link";
import { MdSearch, MdAdd } from "react-icons/md";

const InfoCard  = () => {
    return(
        <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow sm:max-w-xl md:max-w-full lg:max-w-full">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900">Welcome Back, Dr. Saha</h5>
            <p className="mb-3 text-sm text-gray-600">
                The system is up and running, ready to assist you seamlessly with prescription management. We trust you'll have a highly productive day utilizing our platform.
            </p>
            <p className="mb-3 text-sm text-gray-600">
                For any assistance or inquiries, our dedicated customer care team is at your service.
            </p>
            <p className="mb-3 text-sm text-gray-600">                    
                Thank you for choosing VoiceRx. Wishing you a successful day ahead.
            </p>
            <div className="flex justify-start items-start mt-4 gap-x-2 gap-y-2 flex-wrap">
                <Link href="#">
                    <button className="bg-gray-900 hover:bg-gray-950 text-white text-xs py-2 px-4 rounded inline-flex items-center">
                        <MdSearch />
                        <span className="ml-1">Search Patient History</span>
                    </button>
                </Link>
                <Link href="#">
                    <button className="bg-teal-900 hover:bg-teal-950 text-white text-xs py-2 px-4 rounded inline-flex items-center">
                        <MdAdd />
                        <span className="ml-1">Create Prescription</span>
                    </button>
                </Link>
            </div>
            
        </div>
    )
};

export default InfoCard;