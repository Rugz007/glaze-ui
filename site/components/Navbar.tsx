import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-3 bg-white/80 border-b-2 sticky top-0 backdrop-blur ">
      <div className="flex items-center flex-shrink-0 text-white ml-4 md:ml-52">
        <a>
          <Image src="logo.svg" alt="Logo" width={30} height={30} />
        </a>
        <p className="ml-2 text-xl md:text-2xl text-black">glaze-ui</p>
      </div>
      <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto md:items-center md:justify-center md:h-auto md:mr-52">
        <a
          href="https://github.com/bitglaze/glaze-ui"
          className="text-primary-600 hover:text-primary-500"
        >
          <AiFillGithub className="w-8 h-8" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
