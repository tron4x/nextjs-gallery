"use client";
"use cache";

import ModalVideo from './components/modal-video';
import VideoThumb1 from "../../public/videos/cover/c1.jpg";
import NavBar from "./Navbar";
import useSound from 'use-sound';

import mp3 from "../../public/1.mp3";

const BoopButton = () => {
  const [play] = useSound(mp3);

  return (
    <button onClick={() => play()} className="bg-blue-500 text-white px-1 py-1 rounded">
      Play Sound
    </button>
  );
};

export default function Home() {
  return (
    <>
    <NavBar />
    <p className='text-2xl font-bold text-center justify-center'><br />
      Video Gallery <br />
      <BoopButton />
    </p>
    <div className='flex justify-center items-center grid-cols-4 gap-4 p-8 md:grid-cols-4 lg:grid-cols-4'>
      <ModalVideo
      thumb={VideoThumb1}
      thumbWidth={480}
      thumbHeight={320}
      thumbAlt=""
      video="videos//c1.mp4"
      videoWidth={640}
      videoHeight={480}
      />
      {/* Add more videos here */}
      </div>

      <div className='flex justify-center items-center grid-cols-4 gap-4 p-8 md:grid-cols-4 lg:grid-cols-4'>
       {/* Add more videos here */}
      </div>
      <div className='flex justify-center items-center grid-cols-4 gap-4 p-8 md:grid-cols-4 lg:grid-cols-4'>
      Code can be found in my repo: <a href="https://github.com/tron4x/nextjs-gallery.git"> Github</a>
      </div>
    </>
    )
    

    }
