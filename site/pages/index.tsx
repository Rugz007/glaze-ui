import {
  Button,
  Calendar,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@bitglaze/glaze-ui';
import React from 'react';
import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { BsCheck2 } from 'react-icons/bs';
import copy from 'clipboard-copy';
import SampleLogin from '@/components/SampleLogin';
import Navbar from '@/components/Navbar';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleClick = async (text: string) => {
    try {
      await copy(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  return (
    <div>
      <Navbar />
      <main className="w-full bg-white">
        <div className="grid h-[94vh] min-[900px]:grid-cols-2">
          <div className="flex flex-col items-center justify-center w-full ">
            <div className="flex flex-col justify-center mb-0 align-middle">
              <h1 className="w-full text-3xl min-[900px]:text-5xl font-medium text-center min-[900px]:text-left h-fit">
                Build the best user experience.
              </h1>
              <h4 className="my-2 text-lg md:text-3xl text-center md:text-left">
                Simple. Flexible. Performant. Remarkable.
              </h4>
            </div>
            <a href="https://docs.ui.bitglaze.com">
              <Button className="mb-4">Get Started</Button>
            </a>
            <button
              className="flex items-center px-4 py-2 transition-colors duration-150 ease-in-out border-2 rounded-md group bg-slate-50 hover:border-primary-400 group-hover:border-primary-400 border-slate-300 "
              onClick={() => handleClick('npm i @bitglaze/glaze-ui')}
            >
              <p className="text-sm md:text-base">npm i @bitglaze/glaze-ui</p>
              {copied ? (
                <BsCheck2 className="w-6 h-6 ml-4 mr-2 text-primary-400" />
              ) : (
                <MdContentCopy className="w-5 h-5 ml-4 mr-2 group-hover:text-primary-400" />
              )}
            </button>
          </div>
          <div className="flex justify-center w-full  mx-auto align-center bg-slate-100 min-[900px]:p-14">

            <SampleLogin />
          </div>
        </div>
      </main>
    </div>
  );
}
