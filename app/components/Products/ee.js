import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, Card } from "antd";
import Card2 from "./pcard";
import styles from "./Products.module.css";
import ProductDescription from "./ProductDescription";

const { Meta } = Card;

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const items = [
    {
      key: '1',
      label: 'FRESH EGGS',
      children: (
        <div className="flex grid-col-5 gap-8 ">
          <Card2
            key={1}
            onClick={() => setSelectedProduct({ key: 1, label: 'FRESH EGGS', image: '/whiteeggs.png', title: 'WHITE EGGS', cost: 1000, time: 15 })}
            image={"/whiteeggs.png"}
            title={"WHITE EGGS"}
            cost={1000}
            time={15}
          />
          <Card2
            key={2}
            onClick={() => setSelectedProduct({ key: 2, label: 'FRESH EGGS', image: '/brown eggs.png', title: 'BROWN EGGS', cost: 1200, time: 20 })}
            image={"/brown eggs.png"}
            title={"BROWN EGGS"}
            cost={1200}
            time={20}
          />
        </div>
      ),
    },
    // Add other items here...
    {
        key: '2',
        label: 'CHICKEN DEALS',
        children: (
          <div className="flex flex-col justify-center items-center ">
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
            <Card2 key={3} image={"/plantain.png"} title={"CAVENDISH BANANAS"}  cost={1200} time={15}/>,
            <Card2 key={4} image={"/matoke.png"} title={"MATOKE"}  cost={800} time={20}/>,
            <Card2 key={5} image={"/plantain.png"} title={"PLANTAIN"}  cost={1300} time={15}/>,
  
        </div>
        ),
      },
      {
        key: '4',
        label: 'AVOCADOS',
        children: (
          <div className="flex grid-col-5 gap-8 ">
           <Card2 key={6} image={"/avocado.png"} title={"AVOCADOS"}  cost={300} time={15}/>,
          
             
    
        </div>
        ),
      },
      {
        key: '5',
        label: 'POTATOES',
        children: (
          <div className="flex grid-col-5 gap-8 ">
             <Card2 key={7} image={"/irishpotatoes.png"} title={"IRISH POTATOES"}  cost={123} time={23}/>,
            <Card2 key={8} image={"/sweetpotatoes.png"} title={"SWEET POTATOES"}  cost={123} time={15}/>,  
    
        </div>
        ),
      },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <>
      <div className="wrapper mt-10 flex w-full h-fit px-20 pt-10 pb-10 bg-pink-3 max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1 max-sm:items-center">
        <h1 className="font-bold text-center text-2xl bg-pink-6 w-full" id="products">
          Our products
        </h1>
      </div>
      <div className="wrapper flex w-full h-screen px-20 pt-10 pb-10 bg-pink-3 max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1 max-sm:items-center bg-amber-4">
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          className={`bg-pink-3 w-full h-auto ${styles.customTabs}`}
        />
      </div>
      {selectedProduct && (
        <ProductDescription
          key={selectedProduct.key}
          image={selectedProduct.image}
          title={selectedProduct.title}
          cost={selectedProduct.cost}
          time={selectedProduct.time}
        />
      )}
    </>
  );
}
