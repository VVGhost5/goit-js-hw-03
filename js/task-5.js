"use strict";

const products = [
  {
    name: "Радар",
    price: 1300,
    quantity: 4,
  },
  {
    name: "Сканер",
    price: 2700,
    quantity: 3,
  },
  {
    name: "Дроид",
    price: 400,
    quantity: 7,
  },
  {
    name: "Захват",
    price: 1200,
    quantity: 2,
  },
];

const getAllPropValues = function (arr, prop) {
  const productArray = [];

  for (const item of arr) {
    if (item[prop]) {
      productArray.push(item[prop]);
    }
  }
  return productArray;
};

console.log(getAllPropValues(products, "name"));

console.log(getAllPropValues(products, "quantity"));

console.log(getAllPropValues(products, "category"));
