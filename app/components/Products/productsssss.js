import Link from "next/link";
import Image from "next/image";
import { Tabs,TabPane, Card } from 'antd';
const { Meta } = Card;
export default function Products() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: 'FRESH EGGS',
      children: (
        <div className="flex grid-col-5 gap-8 ">
          
          <Card
    
    cover={     <Image
      src="/whiteeggs.png"
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
    <Card
    
    cover={     <Image
      src="/brown eggs.png"
      alt="Vercel Logo"
      className="dark:invert rounded-3xl w"
      width={110}
      height={25}
      priority
    />}
  >
    <Meta className="" title="" description="" />
    <h2 className="text-slate-400 font-semibold text-lg">BROWN EGGS</h2>
    <h4>Item Cost : <span className="text-amber-500 font-normal">RWF 4800</span></h4>
    <h4>Delivery Time (+/-) : <span className="text-amber-500 font-normal">35 minutes</span></h4>
  </Card>
        </div>
      ),
    },
    {
      key: '2',
      label: 'CHICKEN DEALS',
      children: (
        <div className="flex flex-col justify-center items-center">
          <Image
      src="/nochicken.png"
      alt="Vercel Logo"
      className="dark:invert rounded-3xl w"
      width={310}
      height={25}
      priority
    />
    <p>Chicken deals yet to be updated.</p>
               
        </div>
      ),
    },
    {
      key: '3',
      label: 'BANANAS',
      children: (
        <div className="flex grid-col-5 gap-8 ">
          
        <Card
  
  cover={     <Image
    src="/plantain.png"
    alt="Vercel Logo"
    className="dark:invert rounded-3xl w"
    width={110}
    height={25}
    priority
  />}
>
  <Meta className="" title="" description="" />
  <h2 className="text-slate-400 font-semibold text-lg">CAVENDISH BANANAS</h2>
  <h4>Cost Per Kg: <span className="text-amber-500 font-normal">RWF 1500</span></h4>
  <h4>Delivery Time (+/-) : <span className="text-amber-500 font-normal">20 minutes</span></h4>
</Card>        
  <Card
  
  cover={     <Image
    src="/matoke.png"
    alt="Vercel Logo"
    className="dark:invert rounded-3xl w"
    width={110}
    height={25}
    priority
  />}
>
  <Meta className="" title="" description="" />
  <h2 className="text-slate-400 font-semibold text-lg">MATOKE</h2>
  <h4>Cost Per Kg: <span className="text-amber-500 font-normal">RWF 4800</span></h4>
  <h4>Delivery Time (+/-) : <span className="text-amber-500 font-normal">35 minutes</span></h4>
</Card>
<Card
  
  cover={     <Image
    src="/plantain.png"
    alt="Vercel Logo"
    className="dark:invert rounded-3xl w"
    width={110}
    height={25}
    priority
  />}
>
  <Meta className="" title="" description="" />
  <h2 className="text-slate-400 font-semibold text-lg">PLANTAIN</h2>
  <h4>Cost Per Kg: <span className="text-amber-500 font-normal">RWF 800</span></h4>
  <h4>Delivery Time (+/-) : <span className="text-amber-500 font-normal">15 minutes</span></h4>
</Card> 
      </div>
      ),
    },
    {
      key: '4',
      label: 'AVOCADOS',
      children: (
        <div className="flex grid-col-5 gap-8 ">
          
        <Card
  
  cover={     <Image
    src="/avocado.png"
    alt="Vercel Logo"
    className="dark:invert rounded-3xl w"
    width={110}
    height={25}
    priority
  />}
>
  <Meta className="" title="" description="" />
  <h2 className="text-slate-400 font-semibold text-lg">PLANTAIN</h2>
  <h4>Cost Per Kg: <span className="text-amber-500 font-normal">RWF 800</span></h4>
  <h4>Delivery Time (+/-) : <span className="text-amber-500 font-normal">15 minutes</span></h4>
</Card>        
  
      </div>
      ),
    },
    {
      key: '5',
      label: 'POTATOES',
      children: (
        <div className="flex grid-col-5 gap-8 ">
          
        <Card
  
  cover={     <Image
    src="/irishpotatoes.png"
    alt="Vercel Logo"
    className="dark:invert rounded-3xl w"
    width={110}
    height={25}
    priority
  />}
>
  <Meta className="" title="" description="" />
  <h2 className="text-slate-400 font-semibold text-lg">IRISH POTAOES</h2>
  <h4>Cost Per Kg: <span className="text-amber-500 font-normal">RWF 1100</span></h4>
  <h4>Delivery Time (+/-) : <span className="text-amber-500 font-normal">40 minutes</span></h4>
</Card>        
  <Card
  
  cover={     <Image
    src="/sweetpotatoes.png"
    alt="Vercel Logo"
    className="dark:invert rounded-3xl w"
    width={110}
    height={25}
    priority
  />}
>
  <Meta className="" title="" description="" />
  <h2 className="text-slate-400 font-semibold text-lg">SWEET POTATOES</h2>
  <h4>Cost Per Kg: <span className="text-amber-500 font-normal">RWF 1200</span></h4>
  <h4>Delivery Time (+/-) : <span className="text-amber-500 font-normal">35 minutes</span></h4>
</Card>
      </div>
      ),
    },

  ];
  return (
    <>
    <div className="wrapper mt-10 flex w-full  h-fit px-20 pt-10 pb-10 bg-pink-3  max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center">
        <h1 className="font-bold text-center text-2xl bg-pink-6 w-full" id="products">Our products</h1>
    </div>
      <div className="wrapper  flex w-full  h-screen px-20 pt-10 pb-10 bg-pink-3  max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1  max-sm:items-center bg-amber-4">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="bg-pink-3 w-full h-auto " />
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
