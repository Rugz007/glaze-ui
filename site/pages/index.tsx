import { Button } from '@bitglaze/glaze-ui';

export default function Home() {
  return (
    <main className="grid w-full h-screen grid-cols-12 bg-slate-100">
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
        <Button className="bg-primary-700">Github</Button>
      </div>
      <div> </div>
    </main>
  );
}
