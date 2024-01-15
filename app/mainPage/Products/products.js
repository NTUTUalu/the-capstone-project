import Link from "next/link";
import Image from "next/image";
import { Tabs } from 'antd';
// import Tab from "./tab"

export default function Products() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: 'Tab 4',
      children: 'Content of Tab Pane 4',
    },
    {
      key: '5',
      label: 'Tab 5',
      children: 'Content of Tab Pane 5',
    },

  ];
  return (
    <>
    <div className="wrapper mt-10 flex w-full  h-fit px-20 pt-10 pb-10 bg-pink-3  max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
        <h1 className="font-bold text-center text-2xl bg-pink-6 w-full">Our products</h1>
    </div>
      <div className="wrapper  flex w-full  h-fit px-20 pt-10 pb-10 bg-pink-3  max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    
      {/* <Tab/> */}

      </div>
    </>
  );
}
