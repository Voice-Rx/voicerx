import { NextPage } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecordForm from "@/components/RecordForm";
import Recorder from "@/components/Recorder";

const Record: NextPage = () => {    
    return(
        <div>
            <Navbar />
            <div className="flex justify-start items-start">
                <RecordForm />
                <Recorder />
            </div>
            <Footer />
        </div>
    )
}

export default Record;