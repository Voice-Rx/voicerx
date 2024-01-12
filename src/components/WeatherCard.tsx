import Image from "next/image";
import Link from "next/link";
import { MdAccountCircle } from "react-icons/md";
import profileImage from "../../public/SaumyaSarkar.jpg"
import { useEffect, useState } from "react";

const WeatherCard  = () => {
    const weekday: string[] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month: string[] = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const date: Date = new Date();
    const day: string = weekday[date.getDay()];
    const [weather, setWeather]: any = useState({});
    const [loading, setLoading]: any = useState(true);
    useEffect(() => {
        const fetchWeather: Function = async () => {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=d650d0b7c10afbe59597377d0ff22ed8&units=metric')
            const res = await response.json()
            setWeather(res)
            setLoading(false)
        }
        fetchWeather();
    }, [])
    
    const weatherLoading: Function = () => {
        return (
            <div className="animate-pulse">
                <div className="mt-6 flex justify-center">
                    <span className="w-14 h-2 bg-gray-300 rounded"></span>
                </div>                
                <div className="flex flex-row items-center justify-center mt-6">
                    <div className="h-2 bg-gray-300 rounded w-20"></div>
                    <div className="flex flex-col items-center ml-6">
                        <div className="h-2 bg-gray-300 rounded w-12"></div>
                        <div className="mt-1 bg-gray-300 h-2 rounded w-8"></div>
                        <div className="mt-1 bg-gray-300 h-2 rounded w-8">
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-6">
                    <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Wind</div>
                        <span className="mt-1 bg-gray-300 h-2 rounded w-6"></span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Humidity</div>
                        <span className="mt-1 bg-gray-300 h-2 rounded w-6"></span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Visibility</div>
                        <span className="mt-1 bg-gray-300 h-2 rounded w-6"></span>
                    </div>
                </div>
            </div>
        )
    }

    const weatherReal: Function = () => {
        return (
            <div>
                <div className="mt-6 flex justify-center">
                    <Image src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather_icon" width={100} height={100} />
                </div>
                <div className="flex flex-row items-center justify-center mt-6">
                    <div className="font-medium text-6xl">{Math.round(weather.main.temp)}°</div>
                    <div className="flex flex-col items-center ml-6">
                        <div>{weather.weather[0].main}</div>
                        <div className="mt-1">
                            <span className="text-sm font-light text-gray-500">{Math.round(weather.main.temp)+2}°C</span>
                        </div>
                        <div>
                            <span className="text-sm font-light text-gray-500">{Math.round(weather.main.temp)-6}°C</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between mt-6">
                    <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Wind</div>
                        <div className="text-sm text-gray-500">{weather.wind.speed} km/hr</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Humidity</div>
                        <div className="text-sm text-gray-500">{weather.main.humidity}%</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="font-medium text-sm">Visibility</div>
                        <div className="text-sm text-gray-500">{weather.visibility/1000} km</div>
                    </div>
                </div>
            </div>
        )
    }

    return(        
        <div className="border border-gray-200 rounded-lg shadow flex flex-col bg-white p-4 w-full max-w-xs">
            <div className="font-bold text-xl">Kolkata</div>
            <div className="text-sm text-gray-500">{day + " " + date.getDate() + " " +  month[date.getMonth()] + " " +  date.getFullYear()}</div>            
            {loading ? weatherLoading() : weatherReal()}
        </div>
    )    
};

export default WeatherCard;