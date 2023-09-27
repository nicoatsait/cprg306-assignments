import React from 'react';

export default function Item({ name, quantity, category }) {
  return (
    <ul className="">
      <li className="border border-black shadow-xl p-2 rounded-md mb-2 bg-sky-600 ">
        <p className="text-lg font-semibold text-rose-950    ">{name}</p>
        <p className="text-black">Quantity: {quantity}</p>
        <p className="text-black">Category: {category}</p>
      </li>
    </ul>
  );
}

