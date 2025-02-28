// const numbers = [1, 2, 3, 4, 5];
// let arr = [];
// numbers.forEach((number) => {
//     arr.push(number * 2);
//     console.log(arr)}); // Outputs: 2, 4, 6, 8, 10);

// let person = [
//   { id: 1, name: "Sourov", location: "Matigara" },
//   { id: 2, name: "Hironno", location: "Rangpur" },
//   { id: 2, name: "Hrisi", location: "Thakurgaon" }
// ];

// const finding = person.map((men, index) =>{
//     return(`${men.name}`);
// });
// console.log(finding);

// filter
// const products = [
//   { id: 1, name: "laptop", price: 1000 },
//   { id: 2, name: "phone", price: 500 },
//   { id: 3, name: "mouse", price: 100 },
//   { id: 4, name: "wireless keyboard", price: 150 },
//   { id: 5, name: "mechanical keyboard", price: 150 },
//   { id: 6, name: "monitor", price: 200 },
// ];

// const searchProducts = (searchValue) => {
//   return products.filter((product) => {
//     return product.name.toLowerCase().includes(searchValue.toLowerCase());
//   });
// };

// console.log(searchProducts("ph")); // This should now output the matching products



// const filterProducts = products.filter((product)=>{
//   if(product.price>=200 && product.price<=1000){
//     console.log(`Product name: ${product.name} and ${product.price}`);
//   }
// });
// console.log(filterProducts);

// const filterProducts1 = products.filter((product) => product.price >= 200 && product.price <= 1000);
// console.log(filterProducts1);

// const cartProducts = [
//   { id: 1, name: "laptop", price: 1000 },
//   { id: 2, name: "phone", price: 500 },
//   { id: 3, name: "mouse", price: 100 },
//   { id: 4, name: "wireless keyboard", price: 150 },
//   { id: 5, name: "mechanical keyboard", price: 150 },
//   { id: 6, name: "monitor", price: 200 },
// ];

// const total = cartProducts.map(cardItem => cardItem.price)
//   .reduce((accumulate, currentPrice) => accumulate += currentPrice, 0);
// console.log(total);


const products = [
  {
    id: 1,
    name: "Apple Iphone 14",
    price: 1500,
    createdAt: new Date("2024 - 8 - 24"),
  },
  {
    id: 2,
    name: "google pixel 7",
    price: 2000,
    createdAt: new Date("2024 - 6 - 24"),
  },
  {
    id: 3,
    name: "samsung s22",
    price: 1000,
    createdAt: new Date("2024 - 8 - 20"),
  },
  {
    id: 4,
    name: "motorola g60",
    price: 2500,
    createdAt: new Date("2024 - 3 - 2"),
  },
];

const 