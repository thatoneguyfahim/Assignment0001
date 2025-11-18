// problem 1
const formatValue = (input : string| number| boolean) =>{
    if(typeof input === 'string')
        return input.toUpperCase()
    else if(typeof input === 'number')
        return input*2
    else
        return !input
}
// problem 2
const getLength = (input : string | number[]) =>{
    if(input === 'string'){
        return input.length
    }
    else 
        return input.length
}
// problem 3
class Person {
    name : string;
    age : number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getDetails = () =>{
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
// problem 4
type Item = {
  title: string;
  rating: number; 
}

const filterByRating = (items: Item[]): Item[] =>{
  return items.filter((item) => item.rating >= 4);
}

// problem 5
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive === true);
}

// problem 6
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
    let availability :string;
  if(book.isAvailable)
    availability = "Yes"
  else
    availability ="No"

  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`)
  
}

// problem 7
const getUniqueValues = <T extends string | number>(
  array1: T[],
  array2: T[]
): T[] => {
  let uniqueArray: T[] = [];

  const addIfUnique = (value: T) => {
    let exists = false;

    for (let i = 0; i < uniqueArray.length; i++) {
      if (uniqueArray[i] === value) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      uniqueArray.push(value);
    }
  };

  for (let i = 0; i < array1.length; i++) {
    addIfUnique(array1[i]);
  }

  for (let i = 0; i < array2.length; i++) {
    addIfUnique(array2[i]);
  }

  return uniqueArray
};

// problem 8
type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0

  const totalPrice = products.map(product => {
    
    let productPrice: number;

    if (product.discount) {
      productPrice = product.price * product.quantity - product.price * product.quantity*product.discount / 100;
    } else {
      productPrice = product.price * product.quantity;
    }
    return productPrice
  })

  let finalPrice = 0;
  for (let i = 0; i < totalPrice.length; i++) {
    finalPrice += totalPrice[i]
  }

  return finalPrice
}



