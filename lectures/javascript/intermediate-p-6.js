// ! Topic 1: Higher Order Function => calculate
// ! Topic 1: Callback Functon => operation

// ! Topic 2 - Higher Order build-in function: forEach

// higher order function: forEach
// const numbers = [1,2,3,4];
// const total = [];

// numbers.forEach((number)=>{
//     total.push(number * number);
// })

// console.log(total);

// ! Topic 3 - Higher Order build-in function: map

// finding squaredNumbers using map
// const numbers = [1,2,3,4,20];
// const squaredNumbers = numbers.map((number)=>{
//     return number * number;
// })
// console.log(squaredNumbers);

// ! Usecase of map : Listing items
// finding products using map
// const products = [
//     {id: 1, name: 'laptop', price: 1000},
//     {id: 2, name: 'phone', price: 500},
//     {id: 3, name: 'mouse', price: 100},
//     {id: 4, name: 'keyboard', price: 150},
//     {id: 5, name: 'monitor', price: 200},
// ]

// const allProducts = products.map((product, index)=>{
//     console.log(`Product Card: ${index + 1}`);
//     console.log(`product ID: ${product.id}`);
//     console.log(`Product Name: ${product.name}`);
//     console.log(`Product Price: ${product.price}`);
//     console.log('\n\n');
// })

// console.log(allProducts);

// ! Topic 4 - Higher Order build-in function: filter

// const products = [
//   { id: 1, name: "laptop", price: 1000 },
//   { id: 2, name: "phone", price: 500 },
//   { id: 3, name: "mouse", price: 100 },
//   { id: 4, name: "wireless keyboard", price: 150 },
//   { id: 5, name: "mechanical keyboard", price: 150 },
//   { id: 6, name: "monitor", price: 200 },
// ];

// ! Usecase filtering items => price >= 100 && price <= 200
// const filteredProducts = products.filter(
//   (product) => product.price >= 100 && product.price <= 200
// );
// console.log(filteredProducts);

// ! Usecase filtering items => price >= 100 && price <= 200
// ! Map : return items => name
// const filteredProducts = products
//   .filter((product) => product.price >= 100 && product.price <= 200)
//   .map((x) => x.name);
// console.log(filteredProducts);

// ! Usecase searching items
// const searchProduct = products.filter((product) => product.name === "laptop");
// console.log(searchProduct);

// ! Usecase searching items => name.includes("keyboard")
// const searchProduct = products.filter((searchValue) => searchValue.name.includes("keyboard"));
// console.log(searchProduct);

// ! Usecase searching items => Dynamic
// const searchProduct = (searchValue)=>{
//     return products.filter(product=>product.name.toLowerCase().includes(searchValue.toLowerCase()));//.map((x)=> x.name);
// }
// console.log(searchProduct("KeyBoard"));

// ! Topic 5 - Higher Order build-in function: reduce

// const cardProducts = [
//     {name: "Apple Iphone 14", price: 1500},
//     {name: "Apple Iphone 15", price: 2000},
//     {name: "Apple Iphone se4", price: 1000},
//     {name: "Apple Iphone 15 pro max", price: 2500}
// ]
// total price finding by loop
// let totalPrice = 0;

// for(let i = 0; i < cardProducts.length; i++){
//     totalPrice += cardProducts[i].price;
// }
// console.log(`You have to pay in total : ${totalPrice}`);

// total price finding by forEach loop
// let totalPrice = 0;
// cardProducts.forEach((cardItem)=>{
//     totalPrice += cardItem.price;
// });
// console.log(`You have to pay in total : ${totalPrice}`);

// total price finding by reduce loop
// const totalPrice = cardProducts.map(cardItem => cardItem.price)
// .reduce((acc, currectPrice)=> acc + currectPrice, 0);
// console.log(`You have to pay in total : ${totalPrice}`);

// ! Topic 6 - Higher Order build-in function: some(toolen value) => at least one item should be true
// Best practice: variable name should start with has
// at least one item price > 1500

// const price = 1500;
// const hasPrice = cardProducts.some((cardItem) => cardItem.price > price);
// console.log(`atleast one item price > ${price}: ${hasPrice}`);

// ! Topic 7 - Higher Order build-in function: every => all items should be true
// const allPrice = cardProducts.every((cardItem) => cardItem.price > 900);
// console.log(`all items price > 900: ${allPrice}`);

// ! Topic 8 - Higher Order build-in function: sort

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

// ! accending(small to big) and decending(big to small)

// ! sort => sort by name
// const sortedByName = cardProducts.sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortedByName);

// ! sort => sort by price
// const sortedByPrice = cardProducts.sort((a, b) => a.price - b.price);
// console.log(sortedByPrice);

// ! sort => sort by date
// const sortedByDate = cardProducts.sort(
//   (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
// );
// console.log(sortedByDate);

// display menu using function
const displayMenu = ()=>{
    const menu = `
        1. Sort by name(A-Z)
        2. Sort by name(Z-A)
        3. Sort by price(low to high)
        4. Sort by price(high to low)
        5. Sort by date(Old to New)
        6. Sort by date(New to Old)
        `;
        return(menu);
};
console.log(displayMenu());

// copying main products array t another array
let productsArray = [...products];

// print products
const printProducts = (products) => {
  console.log(JSON.stringify(products, null, 2));
};

const sortByNameAtoZ = (productsArray) => {
  return productsArray.sort((a, b) => a.name.localeCompare(b.name));
};

const sortByNameZtoA = (productsArray) => {
  return productsArray.sort((a, b) => b.name.localeCompare(a.name));
};

const sortByPriceLowToHigh = (productsArray) => {
    return productsArray.sort((a, b) => a.price - b.price);
};

const sortByPriceHighttoLow = (productsArray) => {
  return productsArray.sort((a, b) => b.price - a.price);
};

const sortByDateOldtoNew = (productsArray) => {
    return productsArray.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
};

const sortByDateNewtoOld = (productsArray) => {
    return productsArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

const userChoice = prompt(`${displayMenu()}\nEnter your choice: `);


switch (userChoice) {
  case "1":
    console.log(`Products sorted by name (A-Z): `);
    sortByNameAtoZ(productsArray);
    printProducts(productsArray);
    break;

  case "2":
    console.log(`Products sorted by name (Z-A): `);
    sortByNameZtoA(productsArray);
    printProducts(productsArray);
    break;

  case "3":
    console.log(`Products sorted by price (low to high): `);
    sortByPriceLowToHigh(productsArray);
    printProducts(productsArray);
    break;

  case "4":
    console.log(`Products sorted by price (high to low): `);
    sortByPriceHighttoLow(productsArray);
    printProducts(productsArray);
    break;

  case "5":
    console.log(`Products sorted by date (Old to New): `);
    sortByDateOldtoNew(productsArray);
    printProducts(productsArray);
    break;

  case "6":
    console.log(`Products sorted by date (New to Old): `);
    sortByDateNewtoOld(productsArray);
    printProducts(productsArray);
    break;

  default:
    console.log("Invalid choice");
}
