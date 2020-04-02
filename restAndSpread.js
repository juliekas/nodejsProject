const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('hi, I am ' + this.name);
    }
};

const hobbies = ['Baking', 'Sports', 'Coding'];
for (let hobby of hobbies){
    console.log(hobby);
}

// returning hobbies
console.log(hobbies.map(hobby => {
    return 'Hobby: '+ hobby;
}));

// the same but less code, bcs only one return statement
console.log(hobbies.map(hobby => 'Hobby: '+ hobby));

console.log(hobbies);

//adding new element to the same pointer as the array
hobbies.push('Programming');
console.log(hobbies);

// rest and spread operator
// creating copy of array 

const copiedArray = hobbies.slice();
console.log(copiedArray);

// Array in array 
const copiedArray1 = [hobbies];
console.log(copiedArray1);

// spread operator, three dots, taking the elememts of the array one by one and copy them one by one 
// works for objects and arrays
console.log('spread operator');
const copiedArray2 = [...hobbies];
console.log(copiedArray2);

// no rest operator 
console.log('no rest operator');
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1,2,3,4));

//problem to add more arugments thats why rest:
// rest operator 
console.log('rest operator');
const toArrayRest = (...args) => {
    return args;
};

console.log(toArrayRest(1,2,3,4,5));