"use client";
import { useRouter } 
from "next/navigation";

const Navbar = () => {
    const router = useRouter();
  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
        <h1 className="text-3xl" onClick={() => router.push("/")}>Nature
        <span className="font-bold">ONE</span>
        </h1>
        <div className="items-center justify-between hidden sm:flex">
            <p>Menú desktop</p>
        </div>
        <div className="felx sm:hidden">
            <p>Items menu mobile</p>
        </div>
        <div className="flex items-center justify-between gap-2 sm:gap-7">

        </div>
    </div>
  );
}

export default Navbar;