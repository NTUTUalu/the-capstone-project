import Link from "next/link";
import Image from "next/image";
import On from "../footer/Onboardingfooter";


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
              <ul
  class="mr-4 flex list-none flex-col flex-wrap pl-0"
  role="tablist"
  data-te-nav-ref>
  <li role="presentation" class="flex-grow text-center">
    <Link
      href="#tabs-home03"
      class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-home03"
      data-te-nav-active
      role="tab"
      aria-controls="tabs-home03"
      aria-selected="true"
      >Find Transport</Link>
      
  </li>
  <li role="presentation" class="flex-grow text-center">
    <Link
      href="#tabs-profile03"
      class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
      data-te-toggle="pill"
      data-te-target="#tabs-profile03"
      role="tab"
      aria-controls="tabs-profile03"
      aria-selected="false"
      >Opportunities</Link>
  </li>
  
</ul>
</div>
<div className="bottom flex bg-blue-1 justify-center w-full h-28">

<Link href="/" className="border border-white h-fit px-7 py-1 w-fit rounded-3xl font-normal max-md:mr-3">   <button className="text-white font-semibold flex justify-center ">HOME</button> </Link>
      
</div>
</div>
<div className="right flex flex-col h-full bg-amber-2 w-full">
<div className="top bg-white border-b-2 border-slate-100 w-full h-10">

</div>
<div className="middle bg-amber-4 h-full w-full">
<div class="my-2">
  <div
    class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-home03"
    role="tabpanel"
    aria-labelledby="tabs-home-tab03"
    data-te-tab-active>
    Tab 1 content
  </div>
  <div
    class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
    id="tabs-profile03"
    role="tabpanel"
    aria-labelledby="tabs-profile-tab03">
    Tab 2 content
  </div>
  
</div>
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
