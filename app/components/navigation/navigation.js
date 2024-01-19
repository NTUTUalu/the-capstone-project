import Image from "next/image";
import Link from "next/link";
import x from "../../signup/page";

export default function Navigation() {
  return (
    <>
      <div className="bg-pink-3 flex px-10 pt-7 w-full pb-5 h-fit border-b border-slate-300">
        <div className="bg-blue-3 w-full flex">
          <div className="logo">
            <Link href="/" className="">
              <Image
                src="/logo.png"
                alt="Poultry plus logo"
                className=""
                width={120}
                height={25}
                priority
              />
            </Link>
          </div>
          <div className="navWrapper flex flex-col  w-full items-center justify-between pb-3">
            <h1 className="font-semibold tracking-wide border-2 border-slate-500 border-solid px-1">
              POULTRY PLUS
              <span className="ml-0.5">
                <sup>+</sup>
              </span>
            </h1>
            <div className="Navlinks bg-pink-4 w-full mt-5 flex justify-center items-center text-base tracking-wider">
              <Link href="/" className=" mr-4 max-md:mr-3">
                {" "}
                HOME{" "}
              </Link>
              <Link href="/#about" className=" mr-4 max-md:mr-3">
                {" "}
                ABOUT{" "}
              </Link>
              <Link href="/#products" className="mr-4 max-md:mr-3">
                {" "}
                OUR PRODUCTS{" "}
              </Link>
              <Link href="/login" className=" mr-4 max-md:mr-3">
                {" "}
                FIND TRANSPORT{" "}
              </Link>
              <Link
                href="/signup"
                className="bg-amber-500 px-7 py-1 rounded-3xl font-semibold max-md:mr-3"
              >
                {" "}
                <button className="text-white">SIGN UP</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
