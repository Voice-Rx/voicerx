'use client'
import { MdMic, MdSquare, MdClose, MdSend } from 'react-icons/md';
import dynamic from "next/dynamic";

const ReactMediaRecorder = dynamic(() => import('react-media-recorder').then((mod) => mod.ReactMediaRecorder), {
  ssr: false,
});

const Recorder = () => {
//   const [audioBlob, setAudioBlob] = useState<any>(null);

//   const handleStop = (blobUrl: string, blob: Blob) => {
//     setAudioBlob(blob);
//   };

//   const handleUpload = async () => {
//     if (audioBlob) {
//       const formData = new FormData();
//       formData.append('audio', audioBlob);

//       try {
//         const response = await fetch('YOUR_UPLOAD_API_ENDPOINT', {
//           method: 'POST',
//           body: formData,
//         });

//         if (response.ok) {
//           console.log('Audio file uploaded successfully.');
//         } else {
//           console.error('Error uploading audio file.');
//         }
//       } catch (error) {
//         console.error('Error uploading audio file:', error);
//       }
//     }
//   };

  return (
    <div className='lg:w-3/5 w-1/2 m-20'>
      <ReactMediaRecorder
       audio
       render={({ status, startRecording, stopRecording, clearBlobUrl, mediaBlobUrl }) => (
         <div className='flex flex-col justify-center items-center'>
           <p>Recorder State: {status[0].toUpperCase() + status.substring(1)}</p>
           <div className='mt-10 inline-flex items-center gap-x-8'>
            <div className="flex flex-col justify-center items-center text-xs gap-y-2">
              <button className='p-3 rounded-full bg-teal-700 hover:bg-teal-800 text-white text-xl' onClick={startRecording}><MdMic /></button>
              <span>Start</span>
            </div>
            <div className="flex flex-col justify-center items-center text-xs gap-y-2">
              <button className='p-3 rounded-full bg-red-700 hover:bg-red-800 text-white text-xl' onClick={stopRecording}><MdSquare /></button>
              <span>Stop</span>
            </div>
            <div className="flex flex-col justify-center items-center text-xs gap-y-2">
              <button className='p-3 rounded-full bg-gray-900 hover:bg-black text-white text-xl' onClick={clearBlobUrl}><MdClose /></button>
              <span>Cancel</span>
            </div>   
            <div className="flex flex-col justify-center items-center text-xs gap-y-2">
              <button className='p-3 rounded-full bg-sky-700 hover:bg-sky-800 text-white text-xl' onClick={clearBlobUrl}><MdSend /></button>
              <span>Send</span>
            </div>          
           </div>
           {/* <audio src={mediaBlobUrl} controls autoPlay loop /> */}
         </div>
       )}
      />
    </div>
  );
};

export default Recorder;
