import { Button, Checkbox, DropdownMenu } from '@bitglaze/glaze-ui';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import React from 'react';
import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { BsCheck2 } from 'react-icons/bs';
import copy from 'clipboard-copy';

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
      <main className="w-full h-screen  bg-white ">
        <nav className="flex items-center justify-between flex-wrap bg-white p-3 border-b-2">
          <div className="flex items-center flex-shrink-0 text-white ml-52">
            <a>
              <Image src="logo.svg" alt="Logo" width={30} height={30} />
            </a>
          </div>
          <div className="flex items-center mr-52">
            <a
              href="https://github.com/bitglaze/glaze-ui"
              className="text-pink-600 hover:text-pink-500"
            >
              <AiFillGithub className="h-8 w-8" />
            </a>
          </div>
        </nav>
        <div className="grid grid-cols-12 h-screen items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full col-span-6">
            <div className="flex justify-center mb-0 h-fit ">
              <img src="logo.svg" alt="logo" className="mb-0 mr-4 h-28" />
              <h1 className="w-full font-medium text-center h-fit text-8xl">
                glaze-ui
              </h1>
            </div>
            <h4 className="my-4 text-3xl">
              Simple. Flexible. Performant. Remarkable.
            </h4>
            <Button className="bg-primary-700 mb-4">Get Started</Button>

            <button
              className="flex items-center px-4 py-2  group rounded-md bg-slate-50 hover:border-pink-400 group-hover:border-pink-400 transition-colors duration-150 ease-in-out border-2 border-slate-300 "
              onClick={() => handleClick('npm i @bitglaze/glaze-ui')}
            >
              <p>npm i @bitglaze/glaze-ui</p>
              {copied ? (
                <BsCheck2 className="h-6 w-6 mr-2 ml-4  text-pink-400" />
              ) : (
                <MdContentCopy className="h-5 w-5 mr-2 ml-4  group-hover:text-pink-400" />
              )}
            </button>
          </div>
          <div className="col-span-6 flex container mx-auto h-full bg-slate-100 p-14">
            <Button>click</Button>
            <Checkbox>checkbox</Checkbox>
            <DropdownMenu></DropdownMenu>
          </div>
        </div>
      </main>
    </>
  );
}
