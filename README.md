# Next.js Video / Image Gallery 
My small and simple but nice next.js app for video/image view.<br>
Free to use for private projects 😊

App use effects from [Motion-Primitives](https://motion-primitives.com/docs)<br>
Reusable animated components.

![Gallery v1](img/gallery.gif)

#### Demo videos and images are from [pexels.com](https://www.pexels.com/)
#### Music is from [pixabay.com](https://pixabay.com/)

## Features
👉 MP4 Videos<br>
👉 JPG, JPEG Images<br>
👉 MP3 Audio<br>
👉 React and Motion Effects

## Requirements
* Next.js 14+ and npm
* Redis ( Optional )
* S3 Bucket ( Optional )
* Docker ( Optional, if you want to deploy on kubernetes )

> [!WARNING]
> Next.js 15 is currently not supported.<br>
> Coming in next release
  
>[!IMPORTANT]
> S3 is not implemented in this release.<br>
> Will be included in the next release.

>[!NOTE]  
>All dependencies are updated every month.<br>
>Supported video format is MP4<br>
>Supported image format is JPG, JPEG<br>
>Supported audio format is MP3

# Project structure
```shell
.
├── public
|   ├── images
|   ├── videos
|       ├── cover
├── src
|   ├── app
|       ├── components
|       ├── fonts
|       ├── hooks
|       ├── img
|           ├── page.tsx
|       favicon.ico
|       global.css
|       layout.tsx
|       Navbar.tsx
|       page.tsx
|   ├── hooks
|   ├── lib
| .env
| cache-handler.cjs
| Dockerfile
| next.config.js
|  ....
```


# Getting Started
Make sure if nextjs is installed on your computer.

## Install Dependencies
```
$ npm install
```
It will create node_module folder in this all dependency files will be install with this command.

## Update dependencies
```
$ npm i 
```

## Run Project in development mode
```
$ npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project.

## Production Build
```
$ npm run build 
```
This build mode will generate static data.

## Redis function

If you want to use redis, you have to create .env file in the root of the folder.<br>
I hvae for testing purpose, redis running localy on my mac in docker container.<br>
You can redis docker image localy. [Docker Desktop](https://www.docker.com/products/docker-desktop/) must be running.
```
docker run --name redis-stack -p 6379:6379 -d redis/redis-stack-server:latest
```
Image will be running in background.

.env looks like this:
```
REDIS_URL="redis://default@127.0.0.1:6379"
REDIS_PREFIX="gallery"
NEXT_PUBLIC_CACHE_IN_SECONDS="300"
NODE_ENV="production"
```

If you have a kubernetes cluster running redis, you can use your own redis cluster.

### Remove redis

If you dont need redis, then delete the file "cache-handler.cjs"<br>
and remove entrie from "next.config.js"

You need this:
```
/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "standalone",
  };

  module.exports = nextConfig;
  ```

  # How to set images, videos and mp3 in public folder

  You can copy images in folder public/images and videos in public/videos.<br>
  The cover folder is for put cover images for the videos. <br>

  ## Videos and Images in Pages
  ### Videos

The code to play videos and view images are divided in two parts.<br>
Under src/app/page.tsx, the code looks like this:<br>
```js
"use client";
import ModalVideo from './components/modal-video';
import VideoThumb1 from "../../public/videos/cover/c1.jpg";
import VideoThumb6 from "../../public/videos/cover/c3.jpg";
import NavBar from "./Navbar";


export default function Home() {
  return (
    <>
    <NavBar />

    <p className='text-2xl font-bold text-center justify-center'><br />
      Video Gallery
    </p>
    <div className='flex justify-center items-center grid-cols-4 gap-4 p-8 md:grid-cols-4 lg:grid-cols-4'>
      <ModalVideo
      thumb={VideoThumb1}
      thumbWidth={480}
      thumbHeight={320}
      thumbAlt=""
      video="videos//1.mp4"
      videoWidth={640}
      videoHeight={480}
      />
      </div>
      <div className='flex justify-center items-center grid-cols-4 gap-4 p-8 md:grid-cols-4 lg:grid-cols-4'>
      <ModalVideo
      thumb={VideoThumb6}
      thumbWidth={640}
      thumbHeight={480}
      thumbAlt=""
      video="videos//6.mp4"
      videoWidth={720}
      videoHeight={480}
      />
      </div>
```

You have todo two things.
First, import cover image for video file.

```js
import VideoThumb1 from "../../public/videos/cover/c1.jpg";
```

Second, place the video code in the order you want.

```js
<ModalVideo
thumb={VideoThumb1}
thumbWidth={480}
thumbHeight={320}
thumbAlt=""
video="videos//1.mp4"
videoWidth={640}
videoHeight={480}
/>
```

The line

```js
<div className='flex justify-center items-center grid-cols-4 gap-4 p-8 md:grid-cols-4 lg:grid-cols-4'>
```

means an new row.

### Images

Under src/app/img/page.tsx are the code for the image gallery.
The code for every new image is:
```js
     <Dialog
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        <DialogTrigger>
          <DialogImage
            src='/images/1.jpg'
            alt=''
            className='max-w-xs rounded-[4px]'
            style={{ width: '250px', height: '200px', objectFit: 'cover' }}
          />
        </DialogTrigger>
        <DialogContainer>
          <DialogContent className='relative'>
            <DialogImage
              src='/images/1.jpg'
              alt=''
              className='h-auto w-full max-w-[90vw] rounded-[4px] object-cover lg:h-[90vh]'
            />
          </DialogContent>
          <DialogClose
            className='fixed right-6 top-6 h-fit w-fit rounded-full bg-white p-1'
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { delay: 0.3, duration: 0.1 },
              },
              exit: { opacity: 0, transition: { duration: 0 } },
            }}
          >
            <XIcon className='h-5 w-5 text-zinc-500' />
          </DialogClose>
        </DialogContainer>
      </Dialog>
```

### mp3 files

Under src/app/page.tsx set:
```js
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
```
This can be done for image page also.<br>
Have fun  🥳
