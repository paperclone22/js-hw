// 1. Fibonacci
let fib = function(num) {
    let zero = 0;
    let one = 1;
    let t = 0; // temp var
    console.log(zero); // the 1st two fibs
    console.log(one);
    while((num-1) > 0) {
        t = one;
        one += zero; // the next fib
        zero = t;
        console.log(one);
        num--;
    };
};
//fib(25); // the number of fibs to get

// 2. Bubble Sort
let bubbleSort = function(arr) {
    let swapped = false;
    do {
        swapped = false;
        for(let i = 0; i < (arr.length -1); i++) {
            if(arr[i] > arr[i+1]) {
                let j = arr[i+1];
                arr[i+1] = arr[i];
                arr[i] = j;
                swapped = true;
            }
        }
    } while(swapped == true);
    return arr;
};
let main = function() {
    let dan = [1,0,5,6,3,2,3,7,9,8,4]; // the array to be sorted
    dan = bubbleSort(dan);
    console.log(dan);
}
//main();

// 3. Reverse String
let reverseStr = function(s) {
    let size = s.length;
    let i = size;
    if(size > 0) {
        s = s + s.substring(i);
    }
    while(size*2 > s.length) { // end when it is double length
        s = s + s.substring(i-1,i); // add next char to end of string
        i--;
    }
    return s.substring(size); // return the last half of the string
}
let r =  reverseStr('hello world!');
//console.log(r);

// 4. Factorial
let factorial = function(n){
    let result;
    if(n==1){
        return 1;
    }
       result = factorial(n-1) * n;
       return result;
}
//console.log(factorial(4));

// 5. Substring
let subStr = function(ing, ger, off) {
    let s = '';
    off = Math.abs(off) || 0;
    ger += off;
    let i = 0 + off;
    if(ing.length >= ger && ger > 0) { // check for negative numbers and empty strings
        while(i < ger) { // i should always be less than the length of the substring
                s = s + ing.charAt(i); // recreate the string with the next character at the end
            i++;
        }
        return s;
    }
    if(ing.length < ger) {
        window.alert("Index out of bounds OR arg1 was not a string")
    }
    return '';
}
//console.log(subStr('hi low. worldo', 7, 2)); 

// 6. Even Number
let isEven = function(n) {
    let i = n;
    // float-like     int-like
    if(n/2 != Math.floor(n/2)) 
        return false;
    return true;
}
//console.log(isEven(22));

// 7. Palindrome
let isPalindrome = function(s){
    let match = true;
    for(let i = 0; i < Math.floor(s.length/2); i++) {
        if(s[i] != s[s.length-1-i]){
            match = false;
            break;
        }
    }
    return match;
}
//console.log(isPalindrome('radar'));

// 8. Shapes
let printShape = function(s, h, c){
    if(c.length != 1){
        window.alert('character must be of length 1');
        return null;
    }
    if(isEven(h)){
        window.alert('must be an odd number');
        return null;
    }
    s = s.toLowerCase(); // make 's' lower case first
    let cc;
    switch(s){
        case 'triangle':
            cc = c;
            for(let i = 1; i <= h; i++){
                console.log(cc);
                cc = cc + c;
            }
            break;
        case 'square':
        cc = c;
        for(i = 1; i < h; i++){
            cc = cc + c;
        }
        for(i = 1; i <= h; i++){
            console.log(cc);
        }
            break;
        case 'diamond':
        cc = c;
        for(i = 0; i <= Math.floor(h/2); i++){
            console.log(' '.repeat((Math.floor(h/2))-i) + cc.repeat((i*2)+1));
        }
        for(i = Math.floor(h/2)-1; i >= 0; i--){
            console.log(' '.repeat((Math.floor(h/2))-i) + cc.repeat((i*2)+1));
        }
            break;
        default:
            window.alert('I don\'t know that shape');
            return null;
    }
}
//printShape('DIAMOND', 9, 'X');

// 9. Object literal
let traverseObject = function(obj){
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const element = obj[key];
            console.log(key + ': ' +element);
        }
    };
}
let jar = {
    num: 9,
    name: 'dan',
    exists: true
}
//traverseObject(jar);

// 10. Delete Element
let deleteElement = function(arr) {
    console.log(arr.length);
    delete arr[3];
    console.log(arr.length);
}
//deleteElement([1,2,'y',3,6,8]);

// 11. Splice Element
let spliceElement = function(arr) {
    console.log(arr.length);
    arr.splice(3,1);
    console.log(arr.length);
}
//spliceElement([1,2,'y',3,6,8]);

// 12. Defining an object using a constructor
let Person = function(name, age){
    this.name = name;
    this.age = age;
}
var john = new Person('John', 30);
//console.log(john);

// 13. Defining an object using an object literal
let getPerson = function(name, age){
    return new Person(name, age);
}
john = getPerson('John', 30);
//console.log(john);