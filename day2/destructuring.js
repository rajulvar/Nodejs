// suppose we wants to destructure something or im simple words you wants to extract something from the an array or an object 
// for that we a destructuring operator in the morden javascript lets use that

// suppose we have an object from which we only wants to extract only one or two keys 
// this is how we can extract them using a dectructuring operator

const obj = {
    name:'Rajul',
    age:19,
    prefix:'Er.'
}

const getInfo=({ name })=>{
    return name  
}

const namex = getInfo(obj)
console.log(namex)
