import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className="grid w-full h-screen grid-cols-12 bg-slate-100">
      <div className="flex flex-col items-center justify-center w-full col-span-6">
        <img
          src="logo.svg"
          alt="logo"
          style={{ height: '10%', paddingBottom: 0 }}
        />
        <h1 className="w-full mb-6 font-medium text-center text-8xl">
          {' '}
          glaze ui
        </h1>
        <h4 className="text-3xl">Simple. Flexible. Performant. Remarkable.</h4>
        <button>Github</button>
      </div>
      <div> </div>
    </main>
  );
}
