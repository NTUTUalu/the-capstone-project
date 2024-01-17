

import Link from "next/link";
import Image from "next/image";
import { Button } from 'antd';


export default function Tab() {
  return (
    <>
 
      <div className="wrapper  flex w-full  h-fit px-20 pt-10 pb-10 bg-pink-3  max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
      
      <Button type="primary">Button</Button>
      <Tab/>

      </div>
    </>
  );
}
