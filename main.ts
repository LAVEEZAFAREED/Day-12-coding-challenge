//DAY 12 CODING CHALLENGE.
//Question 1:Pizzas:Share your favourite pizza and express your love for them.
let Pizzas: string[] =["peproni","margherita","hawaiian"];

Pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`)
});
console.log("I really love pizza!");

//Question 2:Animals:Highlight animals with  a common trait.
let animals: string[] = ["dog","cat","rabbit"];

animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`);
});

console.log("Any of these animals would make a great pet.");

//Question 3:T-shirt:Create a function for customizing t-shirt.
function make_shirt(size: string, message: string)   {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
make_shirt("medium", "Code is life");