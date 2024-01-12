import Image from "next/image";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import logoWhite from "../../public/logo_white.png"

const Navbar  = () => {
    return(
        <div className="w-full bg-gradient-to-br from-zinc-900 via-neutral-900 to-teal-900 h-14 flex justify-between items-center px-5">
            <Image
                src={logoWhite}
                alt="logo"
                height={25}
            />
            <ul className="list-none text-white text-xs inline-flex items-center px-5 cursor-pointer">
                <li className="px-8">
                    <Link href="/dashboard" className="relative after:rounded after:mt-1 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                        DASHBOARD
                    </Link>
                </li>
                <li className="px-8" >
                    <Link href="/dashboard/record" className="relative after:rounded after:mt-1 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                        RECORD
                    </Link>
                </li>
                <li className="px-8" >
                    <Link href="/dashboard/search" className="relative after:rounded after:mt-1 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                        SEARCH
                    </Link>
                </li>
                <li className="px-8" >
                    <Link href="/dashboard/patientprofile" className="relative after:rounded after:mt-1 w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                        PATIENT PROFILE
                    </Link>
                </li>
            </ul>
            <MdAccountCircle className="text-white text-2xl"/>
        </div>   
    )
};

export default Navbar;