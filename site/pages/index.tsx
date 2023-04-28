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
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import React from 'react';
import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { BsCheck2 } from 'react-icons/bs';
import copy from 'clipboard-copy';
import SampleLogin from '@/components/SampleLogin';

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
    <>
      <main className="w-full h-screen bg-white ">
        <nav className="flex flex-wrap items-center justify-between p-3 bg-white border-b-2">
          <div className="flex items-center flex-shrink-0 text-white ml-52">
            <a>
              <Image src="logo.svg" alt="Logo" width={30} height={30} />
            </a>
            <p className="ml-2 text-2xl text-black">glaze-ui</p>
          </div>
          <div className="flex items-center mr-52">
            <a
              href="https://github.com/bitglaze/glaze-ui"
              className="text-primary-600 hover:text-primary-500"
            >
              <AiFillGithub className="w-8 h-8" />
            </a>
          </div>
        </nav>
        <div className="grid items-center justify-center h-screen grid-cols-12 ">
          <div className="flex flex-col items-center justify-center w-full col-span-6">
            <div className="flex flex-col justify-center mb-0 align-middle ">
              <h1 className="w-full text-5xl font-medium text-left h-fit">
                Build the best user experience.
              </h1>
              <h4 className="my-4 text-3xl text-left">
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
              <p>npm i @bitglaze/glaze-ui</p>
              {copied ? (
                <BsCheck2 className="w-6 h-6 ml-4 mr-2 text-primary-400" />
              ) : (
                <MdContentCopy className="w-5 h-5 ml-4 mr-2 group-hover:text-primary-400" />
              )}
            </button>
          </div>
          <div className="flex justify-center w-full h-full col-span-6 mx-auto align-center bg-slate-100 p-14">
            <SampleLogin />
          </div>
        </div>
      </main>
    </>
  );
}
