import { useEffect, useState } from 'react';
import { Tabs, Card } from 'antd';
import Card2 from "./product-card";
import { useRouter } from 'next/navigation';
import Image from "next/image";
const { Meta } = Card;
import {BASE_API_URL} from "../../../constants"

export default function Products() {
  const router = useRouter();
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    fetch(`${BASE_API_URL}/products`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Check if the data object has a "data" property which is an array
        if (!data || !data.data || !Array.isArray(data.data)) {
          throw new Error('Invalid data format');
        }
        // Extract the array of products
        const products = data.data;
        // Create a map to group products by category
        const productGroups = {};
        products.forEach(product => {
          if (!productGroups[product.category]) {
            productGroups[product.category] = [];
          }
          productGroups[product.category].push(product);
        });
        // Create tabs based on the product groups
        const newTabs = Object.entries(productGroups).map(([category, products]) => ({
          key: category,
          label: category,
          children: (
            <div className="flex grid-cols-5 gap-8">
              {products.map(product => (
                <Card2
                productId={product._id}
                  key={product._id}
                  image={`/${product.imageName}`}
                  title={product.productName}
                  cost={product.itemCost}
                  time={product.deliveryTime}
                />
              ))}
            </div>
          ),
        }));
        // Insert the "CHICKEN DEALS" tab in the middle
        const middleIndex = Math.ceil(newTabs.length / 2);
        newTabs.splice(middleIndex, 0, { 
          key: 'chicken-deals',
          label: 'Chicken Deals',
          children: (
            <div className="flex flex-col justify-center items-center ">
              <Image
                src="/nochicken.png"
                alt="Chicken Deals"
                className="dark:invert rounded-3xl w"
                width={310}
                height={25}
                priority
              />
              <p>Chicken deals yet to be updated.</p>
            </div>
          ),
        });
        setTabs(newTabs);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Handle the error gracefully, e.g., display a message to the user
      });
  }, []);

  return (
    <>
      <div className="wrapper mt-10 flex w-full h-fit px-20 pt-10 pb-10 bg-pink-3 max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1 max-sm:items-center">
        <h1 className="font-bold text-center text-2xl bg-pink-6 w-full" id="products">Our products</h1>
      </div>
      <div className="wrapper flex w-full h-screen px-20 pt-10 pb-10 bg-pink-3 max-md:px-10 max-md:h-fit max-md:my-40 max-sm:flex-col max-sm:px-1 max-sm:items-center bg-amber-4">
        <Tabs defaultActiveKey="Bananas" items={tabs} className={`bg-pink-3 w-full h-auto`} />
      </div>
    </>
  );
}
