import React from 'react';

export default function Item({ name, quantity, category }) {
  return (
    <ul className="">
      <li className="border p-2 rounded-md mb-2 bg-yellow-300  ">
        <p className="text-lg font-semibold text-sky-900  ">{name}</p>
        <p className="text-gray-600">Quantity: {quantity}</p>
        <p className="text-gray-600">Category: {category}</p>
      </li>
    </ul>
  );
}

