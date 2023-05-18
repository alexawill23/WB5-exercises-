"use strict"

let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Reese's Peanut Butter Cups", price: 1.49}, 
    {product: "Hershey's Kisses", price: 0.99}, 
    {product: "Lindt Lindor Truffles", price: 3.99}, 
    {product: "Godiva Chocolate Assortment", price: 9.99}, 
    {product: "Sugarfina Champagne Bears", price: 15.99}, 
    {product: "Jelly Belly Jelly Beans", price: 19.99}, 
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];
   
   //candies that cost less than 4.00 
   let candyProduct = products.filter(c => c.price <= 4); 
   for (let i = 0; i < candyProduct.length; i++) { 
    console.log(candyProduct[i].product + " " +  candyProduct[i].price); 
   }
   console.log("-------------------------"); 



   //candies that has M&Ms in its name 
   let candywithMM =  
   products.find((arrayValue)=> arrayValue.product = "M&Ms")




   //Do they carry swedish fish 


   let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",

    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];


// Who is the Academy Member whose ID is 187?


// Who has been in at least 3 films?


// Who has a name that starts with "Bob"?


// HARDER: Which Academy Members have been in a film
// that starts with "A"