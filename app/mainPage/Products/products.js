import Link from "next/link";
import Image from "next/image";
import { Tabs,TabPane, Card } from 'antd';
// import Tab from "./tab"
// import card from "./card";
const { Meta } = Card;
export default function Products() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: (
        <div>
          <h2>Content for Tab 1</h2>
          <p>Your additional information goes here.</p>
          <Card
    
    cover={     <Image
      src="/farmers.png"
      alt="Vercel Logo"
      className="dark:invert rounded-3xl w"
      width={110}
      height={25}
      priority
    />}
  >
    <Meta className="" title="" description="" />
    <h2 className="text-slate-400 font-semibold text-lg">WHITE EGGS</h2>
    <h4>Item Cost : <span className="text-amber-500 font-normal">RWF 4000</span></h4>
    <h4>Delivery Time (+/-) : <span className="text-amber-500 font-normal">30 minutes</span></h4>
  </Card>
        </div>
      ),
    },
    {
      key: '2',
      label: 'Tab 2',
      children: (
        <div>
          <h2>Content for Tab 2</h2>
          <p>Your additional information goes here.</p>
        </div>
      ),
    },
    {
      key: '3',
      label: 'Tab 3',
      children: (
        <div>
          <h2>Content for Tab 3</h2>
          <p>Your additional information goes here.</p>
        </div>
      ),
    },
    {
      key: '4',
      label: 'Tab 4',
      children: (
        <div>
          <h2>Content for Tab 4</h2>
          <p>Your additional information goes here.</p>
        </div>
      ),
    },
    {
      key: '5',
      label: 'Tab 5',
      children: (
        <div>
          <h2>Content for Tab 5</h2>
          <p>Your additional information goes here.</p>
        </div>
      ),
    },

  ];
  return (
    <>
    <div className="wrapper mt-10 flex w-full  h-fit px-20 pt-10 pb-10 bg-pink-3  max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
        <h1 className="font-bold text-center text-2xl bg-pink-6 w-full">Our products</h1>
    </div>
      <div className="wrapper  flex w-full  h-fit px-20 pt-10 pb-10 bg-pink-3  max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      {/* <Tabs defaultActiveKey="1" onChange={onChange}>
          {items.map((item) => (
            <TabPane tab={item.label} key={item.key}>
              {item.children}
            </TabPane>
          ))}
        </Tabs> */}


      </div>
    </>
  );
}
