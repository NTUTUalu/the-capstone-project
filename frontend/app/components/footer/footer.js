import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <>
        <div className="wrapper flex flex-col items-center mb-8 bg-pink- h-60 justify-evenly border-t w-full bg-pink-4 border-slate-300">
            <h1 className="font-semibold tracking-wide">POULTRY PLUS<span className="ml-0.5"><sup>+</sup></span></h1>
            <div className="navLinks flex text-sm w-fit justify-around items-center tracking-wider font-medium text-slate-600">
            <Link href="/" className="mr-3 max-md:mr-3">   HOME </Link> <Link href="/#about" className=" mr-3 max-md:mr-3">   ABOUT </Link> <Link href="/login" className=" mr-3  max-md:mr-3">   SUPPLIER OPPORTUNITIES </Link> 
            <Link href="/login" className="mr-3 max-md:mr-3">   SIGN IN </Link> 
            <Link href="/" className=" max-md:mr-3 flex justify-between items-center">        <Image
                    src="/4.png"
                    alt="Poultry plus logo"
                    className="mr-1"
                    width={25}
                    height={25}
                    priority
                  />SUPPORT PHONE </Link>  
           
              
            </div>
            <div className="socialMedia flex ">
            <Image
                    src="/1.png"
                    alt="Poultry plus logo"
                    className="mr-2"
                    width={25}
                    height={25}
                    priority
                  />
                       <Image
                    src="/2.png"
                    alt="Poultry plus logo"
                    className="mr-2"
                    width={25}
                    height={25}
                    priority
                  />
                       <Image
                    src="/3.png"
                    alt="Poultry plus logo"
                    className="mr-2"
                    width={25}
                    height={25}
                    priority
                  />
                       <Image
                    src="/5.png"
                    alt="Poultry plus logo"
                    className="mr-2"
                    width={25}
                    height={25}
                    priority
                  />
                       <Image
                    src="/6.png"
                    alt="Poultry plus logo"
                    className=""
                    width={25}
                    height={25}
                    priority
                  />
               
            </div>
            <h3 className="flex text-xs text-slate-400">Copyright      <Image
                    src="/copyright.png"
                    alt="Poultry plus logo"
                    className="h-4 flex place-self-center
                    mx-1 opacity-60"
                    width={15}
                    height={15}
                    priority
                  /> 2023 All right reserved | African 2-2 Inc.</h3>
        </div>
        </>
    )
}