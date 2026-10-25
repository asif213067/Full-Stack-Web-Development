import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello world from Express.js");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/users", (req, res) => {
  res.send(users);
});

const users = [
  {
    id: 1,
    name: "Rahim Ahmed",
    email: "rahim@gmail.com",
    age: 22,
    city: "Dhaka",
  },
  {
    id: 2,
    name: "Karim Hasan",
    email: "karim@gmail.com",
    age: 25,
    city: "Chittagong",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    email: "nusrat@gmail.com",
    age: 21,
    city: "Rajshahi",
  },
  {
    id: 4,
    name: "Sadia Islam",
    email: "sadia@gmail.com",
    age: 24,
    city: "Khulna",
  },
  {
    id: 5,
    name: "Tanvir Hossain",
    email: "tanvir@gmail.com",
    age: 27,
    city: "Sylhet",
  },
  {
    id: 6,
    name: "Farhan Kabir",
    email: "farhan@gmail.com",
    age: 23,
    city: "Pabna",
  },
  {
    id: 7,
    name: "Ayesha Rahman",
    email: "ayesha@gmail.com",
    age: 20,
    city: "Barishal",
  },
  {
    id: 8,
    name: "Sakib Mahmud",
    email: "sakib@gmail.com",
    age: 26,
    city: "Rangpur",
  },
  {
    id: 9,
    name: "Mim Akter",
    email: "mim@gmail.com",
    age: 22,
    city: "Cumilla",
  },
  {
    id: 10,
    name: "Imran Chowdhury",
    email: "imran@gmail.com",
    age: 28,
    city: "Mymensingh",
  },
];

console.log(users);