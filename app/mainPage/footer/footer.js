import Image from "next/image";
import Link from "next/link";


export default function Footer() {
    return (
        <>
        <div className="wrapper">
            <h1>POULTRY PLUS<span>+</span></h1>
            <div className="navLinks">
            <Link href="/" className="text-green-400 text-lg font-semibold max-md:mr-3">   HOME </Link> <Link href="/" className="text-green-400 text-lg font-semibold max-md:mr-3">   ABOUT </Link> <Link href="/" className="text-green-400 text-lg font-semibold max-md:mr-3">   SUPPLIER OPPORTUNITY </Link> <Link href="/" className="text-green-400 text-lg font-semibold max-md:mr-3">        <Image
                    src="/logo.png"
                    alt="Poultry plus logo"
                    className=""
                    width={25}
                    height={25}
                    priority
                  />SUPPORT PHONE </Link>  
           
              
            </div>
            <div className="socialMedia">
            <Image
                    src="/logo.png"
                    alt="Poultry plus logo"
                    className=""
                    width={25}
                    height={25}
                    priority
                  />
                       <Image
                    src="/logo.png"
                    alt="Poultry plus logo"
                    className=""
                    width={25}
                    height={25}
                    priority
                  />
                       <Image
                    src="/logo.png"
                    alt="Poultry plus logo"
                    className=""
                    width={25}
                    height={25}
                    priority
                  />
                       <Image
                    src="/logo.png"
                    alt="Poultry plus logo"
                    className=""
                    width={25}
                    height={25}
                    priority
                  />
                       <Image
                    src="/logo.png"
                    alt="Poultry plus logo"
                    className=""
                    width={25}
                    height={25}
                    priority
                  />
            </div>
            <h3>Copyright      <Image
                    src="/logo.png"
                    alt="Poultry plus logo"
                    className=""
                    width={25}
                    height={25}
                    priority
                  /> 2023 All right reserved | African 2-2 Inc.</h3>
        </div>
        </>
    )
}