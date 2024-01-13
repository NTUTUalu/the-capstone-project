import Link from "next/link";
import Image from "next/image";
import On from "../footer/Onboardingfooter"

export default function Dashboard() {
  return (
    <>
    <div className="wrapper flex w-full bg-pink-4 h-screen">
<div className="left h-full w-48 bg-yellow-900 flex flex-col">
<div className="top h-full w-full flex flex-col">
<Link href="#" className="bg-pink-3 flex justify-center mb-8">
                <Image
                    src="/logo.png"
                    alt="Poultry plus logo"
                    className=""
                    width={100}
                    height={25}
                    priority
                  />
              </Link>
              <h3 className="bg-pink-6 h-8 w-full flex text-white font-semibold tracking-wide items-center pl-2 border-l-4 border-amber-500">Find Transport</h3>
              <h3 className="bg-pink-6 h-8 w-full flex text-white font-semibold tracking-wide items-center pl-2 border-l-4 border-amber-500">Opportunities</h3>
</div>
<div className="bottom flex bg-blue-1 justify-center w-full h-28">

<Link href="/" className="border border-white h-fit px-7 py-1 w-fit rounded-3xl font-normal max-md:mr-3">   <button className="text-white font-semibold flex justify-center ">HOME</button> </Link>
      
</div>
</div>
<div className="right flex flex-col h-full bg-amber-2 w-full">
<div className="top bg-white border-b-2 border-slate-100 w-full h-10">

</div>
<div className="middle bg-amber-4 h-full w-full">

<On/>
</div>
<div className="bottom flex justify-center items-center bg-blue- h-16">
<h3 className="flex w-fit h-fit text-xs bg-pink- text-slate-400">Copyright      <Image
                    src="/copyright.png"
                    alt="Poultry plus logo"
                    className="h-4 flex place-self-center
                    mx-1 opacity-60"
                    width={15}
                    height={15}
                    priority
                  /> 2023 All right reserved | African 2-2 Inc.</h3>
</div>
</div>
    </div>
    </>
  );
}
