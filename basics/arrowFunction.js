//write the same fuction i have wriiteen in the frist.js file in this file but with => technique

const user = 'Rajul';
let userage = 19;
const isAdult =true;
const displayInfo = (name , age , adult )=>{
    return 'Hello '+name+' you are '+age+' years old and you are adult : '+isAdult
}

console.log(displayInfo(user, userage, isAdult));


//now lets talk about how cam you write these arrow function in a much leaner way
//i) ()=>  if and only if you wants to do something in only one line in functions body
//ii) => seems incomplete but its not when you have to just pass one argument and wants do something only one line in the function body 