const names = ['Rajul', 'Ayush', 'Khushbu', 'Owias', 'Jitu', 'Utkarsh']

const newNames = [...names] // this is a spread operator because extracting some value from an existing array then puuting them into another other


// now lets talk about the rest operator 
// suppose we have to create a fuction in which we can get any amount of aarguments which we donot know 
// so in that case what we do is we put a rest operator there which collects all the arguments then merge them together and can be use later
// For example we have for creating a arayy


const createArray = function (...args){
    return args
}

console.log(createArray(1,2,3,4,5,6,7,8,9,0));
console.log(newNames)
