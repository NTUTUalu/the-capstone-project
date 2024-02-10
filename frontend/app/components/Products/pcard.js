"use client"
import Link from "next/link";
import Image from "next/image";
import { Card } from "antd";
const { Meta } = Card;
import { useRouter } from "next/navigation";

export default function Card2({ key, image, title, cost, time }) {
  const router = useRouter();
  
  const handleNavigation= async(e) => {
    e.preventDefault();
    router.push("/productDescription");
  }
  return (
    <>
      <Card
onClick={handleNavigation}
        key={key}
        cover={
          <Image
            src={image}
            alt="Vercel Logo"
            className="dark:invert rounded-3xl w"
            
            width={110}
            height={25}
            priority
          />
        }
      >
        <Meta className="" title="" description="" />
        <h2 className="text-slate-400 font-semibold text-lg">{title}</h2>
        <h4>
          Item Cost :{" "}
          <span className="text-amber-500 font-normal">RWF {cost}</span>
        </h4>
        <h4>
          Delivery Time (+/-) :{" "}
          <span className="text-amber-500 font-normal">{time} minutes</span>
        </h4>
      </Card>
    </>
  );
}
