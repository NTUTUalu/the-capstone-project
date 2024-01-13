import Link from "next/link";
import Image from "next/image";
import { Button } from 'antd';
// import Tab from "./tab"

export default function Products() {
  return (
    <>
    <div className="wrapper mt-10 flex w-full  h-fit px-20 pt-10 pb-10 bg-pink-3  max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
        <h1 className="font-bold text-center text-2xl bg-pink-6 w-full">Our products</h1>
    </div>
      <div className="wrapper  flex w-full  h-fit px-20 pt-10 pb-10 bg-pink-3  max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
      
      <Button type="primary">Button</Button>
      {/* <Tab/> */}

      </div>
    </>
  );
}
