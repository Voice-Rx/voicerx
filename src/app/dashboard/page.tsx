"use client"
import { NextPage } from "next";
import Navbar from "@/components/Navbar";
import InfoCard from "@/components/InfoCard";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
import dynamic from "next/dynamic";


const WeatherCard = dynamic(
    () => {
      return import("@/components/WeatherCard");
    },
    { ssr: false }
  );
  

const Dashboard: NextPage = () => {    
    return(
        <div>
            <Navbar />
            <div className="p-10 flex flex-col justify-center items-start">
                <div className="flex justify-between items-start gap-x-6 sm:flex-col md:flex-row lg:flex-row lg:gap-y-0 sm:gap-y-6 lg:w-full">
                    <div className="lg:w-3/4 md:w-1/2">
                        <InfoCard />
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 sm:w-full">
                        <WeatherCard />   
                    </div>                       
                </div>                
                <StatsCard />                            
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;