
import {Card} from "antd";
import Image from "next/image";
const { Meta } = Card;
import Link from "next/link";

export default function Card2({ productId, image, title, cost, time }) {
  
  
 
  return (
    <Link href={"/product/"+productId}>  
      <Card
        cover={
          <Image
            src={image}
            alt="Product Image"
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
          Item Cost:{" "}
          <span className="text-amber-500 font-normal">RWF {cost}</span>
        </h4>
        <h4>
          Delivery Time (+/-):{" "}
          <span className="text-amber-500 font-normal">{time} minutes</span>
        </h4>
      </Card>
    </Link>
  );
}
