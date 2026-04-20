let prompt = require("prompt-sync")();

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

/* 1. Create an object literal called personAccount. 
It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome,
addExpense and accountBalance methods. 
Incomes is a set of incomes and its description and expenses is a set of incomes and its description. */

const personAccount = {
  firstName: "Bristol",
  lastName: "Stormwind",
  incomes: [
    { amount: 3000, description: "monthly payment" },
    { amount: 1000, description: "work done on weekends" },
  ],
  expenses: [
    { amount: 500, description: "rent" },
    { amount: 200, description: "groceries" },
    { amount: 100, description: "utilities" },
  ],
  totalIncome() {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },
  totalExpense() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },
  accountInfo() {
    return `${this.firstName} ${this.lastName} - Income: $${this.totalIncome()}, Expenses: $${this.totalExpense()}, Balance: $${this.accountBalance()}`;
  },
  addIncome(amount, description) {
    this.incomes.push({ amount, description });
  },
  addExpense(amount, description) {
    this.expenses.push({ amount, description });
  },
  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(personAccount.accountInfo());

/* 2. Imagine you are getting the above users collection from a MongoDB database. 
a. Create a function called signUp which allows user to add to the collection. 
If user exists, inform the user that he has already an account. */

function signUp() {
  const now = new Date();

  let newUser = {
    username: prompt("Type your username: "),
    email: prompt("Type your email: "),
    password: prompt("Type your password: "),
    createdAt: now,
    isLoggedIn: true,
  };

  const userExists = users.some(
    (user) => user.username === newUser.username || user.email === newUser.email,
  );

  if (userExists) {
    alert("You already have an account.");
    return;
  }

  users.push(newUser);
  console.log(users);
}

// signUp();

// b. Create a function called signIn which allows user to sign in to the application.

function signIn() {
  const identifier = prompt("Enter your username or email: ");
  const password = prompt("Enter your password: ");


  const user = users.find(
    u => u.username === identifier || u.email === identifier
  );

  if (!user) {
    console.log(("User not found. Please sign up first."));
    return;
  }

  if (user.password !== password) {
    console.log(("Incorrect password. Try again."));
    return;
  }

  user.isLoggedIn = true;
  console.log((`Welcome back, ${user.username}! You are now logged in.`));
}

// signIn();

/* 3. The products array has three elements and each of them has six properties. 
a. Create a function called rateProduct which rates the product */

function rateProduct(productId, userId, rate) {

 if (typeof rate !== 'number' || rate < 0 || rate > 5) {
    console.error('Rate must be a number between 0 and 5');
    return null;
  }

    const product = products.find(p => p._id === productId);
  if (!product) {
    console.error(`Product with _id "${productId}" not found`);
    return null;
  }

  product.ratings.push({ userId, rate });
  return product;
}

// rateProduct('aegfal', 1, 4);
// console.log(products)

// b. Create a function called averageRating which calculate the average rating of a product.

function averageRating(productId) {
  const product = products.find(p => p._id === productId);
  if (!product) {
    console.error(`Product not found.`);
    return null;
  }

  const ratings = product.ratings;
  if (ratings.length === 0) {
    return 0; 
  }


  const sum = ratings.reduce((total, rating) => total + rating.rate, 0);
  const average = sum / ratings.length;
  
  return average;
}

console.log(averageRating('eedfcf'))


/* 4. Create a function called likeProduct. 
This function will helps to like to the product if it is not liked and remove like if it was liked. */
