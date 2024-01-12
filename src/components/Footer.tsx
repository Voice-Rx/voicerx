import Image from "next/image";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import logoWhite from "../../public/logo_white.png"

const InfoCard  = () => {
    return(
        <div className="bottom-0 fixed w-full h-12 text-gray-500 text-xs bg-zinc-950 flex items-center justify-end px-5">
            &copy; Copyright 2024 VoiceRx - Voice Assisted Prescription Generator 
        </div>   
    )
};

export default InfoCard;