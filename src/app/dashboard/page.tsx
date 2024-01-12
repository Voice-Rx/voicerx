"use client"
import { NextPage } from "next";
import Navbar from "@/components/Navbar";
import InfoCard from "@/components/InfoCard";
import Footer from "@/components/Footer";
import WeatherCard from "@/components/WeatherCard";

const Dashboard: NextPage = () => {    
    return(
        <div>
            <Navbar />
            <div className="p-10 flex justify-start items-start gap-x-6">
                <WeatherCard />
                <InfoCard />
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;