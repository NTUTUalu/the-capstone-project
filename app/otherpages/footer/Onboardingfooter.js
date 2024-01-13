import Image from "next/image";
import Link from "next/link";

export default function OnboardingFooter() {
  return (
    <>
      <div className="bg-pink-3 flex px- pt- pb- h-fit border-t border-yellow-800">
        <div className="logo flex justify-center items-center">
        <h1 className="font-semibold tracking-wide  text-yellow-900 px-1">POULTRY PLUS<span className="ml-0.5"><sup>+</sup></span></h1>
          <Link href="#" className="">
            <Image
              src="/logo.png"
              alt="Poultry plus logo"
              className=""
              width={60}
              height={25}
              priority
            />
          </Link>
        </div>
      </div>
    </>
  );
}
