
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
    return (
        <>
        <div>
            <div>
                <div className="logo">
                <Link href="#" className="">
                <Image
                    src="/logo.png"
                    alt="Poultry plus logo"
                    className=""
                    width={25}
                    height={25}
                    priority
                  />
              </Link>
                </div>
                <div className="navWrapper">
                    <h1>POULTRY<span>+</span></h1>
                    <div className="Navlinks">
                    <Link href="/" className="text-green-400 text-lg font-semibold max-md:mr-3">   Home </Link>
                    <Link href="/" className="text-green-400 text-lg font-semibold max-md:mr-3">   Home </Link>
                    <Link href="/" className="text-green-400 text-lg font-semibold max-md:mr-3">   Home </Link>
                    <Link href="/" className="text-green-400 text-lg font-semibold max-md:mr-3">   Home </Link>
                    <Link href="/" className="text-green-400 text-lg font-semibold max-md:mr-3">   <button>SIGN UP</button> </Link>
                    
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}