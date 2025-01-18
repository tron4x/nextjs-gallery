"use client";

import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogClose,
    DialogImage,
    DialogContainer,
  } from '../../app/components/Dialog';
  import { XIcon } from 'lucide-react';
  import NavBar from '../Navbar';

export default function ImageGallery() {
    return (
      <>
      <NavBar />
      <p className='text-2xl font-bold text-center justify-center'><br />
        Image Gallery<br />
      </p>

      <div className='flex justify-center items-center grid-cols-4 gap-4 p-8 md:grid-cols-4 lg:grid-cols-4'>
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
      <Dialog
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        <DialogTrigger>
          <DialogImage
            src='/images/2.jpg'
            alt=''
            className='max-w-xs rounded-[4px]'
            style={{ width: '250px', height: '200px', objectFit: 'cover' }}
          />
        </DialogTrigger>
        <DialogContainer>
          <DialogContent className='relative'>
            <DialogImage
              src='/images/2.jpg'
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
      </div>
    </>
  );
}