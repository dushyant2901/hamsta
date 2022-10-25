import React from "react";
import { DeliveryIcon, ProductIcon, PaymentIcon } from "../../icons";

import BenefitsItem from "../BenefitsItem";

const benefits = [
  {
    title: "Delivery",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora repellendus excepturi",
    icon: <DeliveryIcon />,
  },
  {
    title: "Products",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
    icon: <ProductIcon />,
  },
  {
    title: "Payments",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora repellendus excepturi, consequatur sed inventore ut",
    icon: <PaymentIcon />,
  },
];

const Benefits = () => (
  <div className="container mx-auto flex flex-col md:flex-row py-10 space-y-8 md:space-y-0 md:space-x-8 w-[90%] sm:w-3/4 md:w-full">
    {benefits.map((item) => (
      <BenefitsItem key={item.title} {...item} />
    ))}
  </div>
);

export default Benefits;
