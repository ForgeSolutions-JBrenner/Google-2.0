import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
import {signIn, signOut, useSession} from 'next-auth/react'

function Header() {
  const {data: session, status} =useSession();
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 w-full bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          width={120}
          height={40}
          onClick={() => router.push("/")}
          className="cursor-pointer"
          alt="Google logo"
        />
        <form
          action=""
          className="flex border-2 px-6 py-3 ml-10 mr-5 border-gray-200 rounded-full flex-grow shadow-lg
      max-w-3xl items-center"
        >
          <input
            type="text"
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
          />
          <XIcon
            className="h-7 mr-2 text-gray cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-2 border-gray-300 transition duration-100 transform hover:animate-pulse hover:scale-125 cursor-pointer" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer transition duration-100 transform hover:scale-125" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="justify-end" url="https://img.search.brave.com/pg0Br7D51MtQxTC9u4v7k-vOSV0sgPwNu4grIEN7zk0/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/NVRpU0xadzdaSUFQ/YnB4MXJLclF3SGFF/SyZwaWQ9QXBp" />
      </div>

      {/* Header Options Component */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
