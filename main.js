// var example = 10;
//var example;
// example;
// example = 'hello world';
// example = 'hello world';
// example = 'hello world';
// example = 'hello world';
// example = 'hello world';
// example = 'hello world';

// var myVariable = 'Hello';

// let example2 = 'google';

// const example3 = [1, 2, 4, 5];

// let count = null;

// let Person = {
//     name: Symbol('Nurlan'),
//     surname: Symbol('Yusifli')
// };

// let longNumber = 9007199254740992n;

// console.log(typeof longNumber);

// function exampleFunc () {
//     if (true) {
//         var myVar = 10;
//         let myVar2 = 11;
//         const myVar3 = 20;
//         console.log(myVar);
//         console.log(myVar2);
//         console.log(myVar3);
//     }
//         console.log(myVar);
//         console.log(myVar2);
//         console.log(myVar3);
// }

// let myVar2 = 20;

// if (true) {
//     var myVar = 10;
//     let myVar2 = 11;
//     const myVar3 = 20;
//     console.log('inside the function',myVar2);
// }

// console.log('outside the function',myVar2);

// exampleFunc();


// console.log(myVar);
// console.log(myVar2);
// console.log(myVar3);

// let simpleNumber = 10;
// let newNumber = '10';

// let boolVal;
// let negaive = false;

//  alert('hello Mehemmed');

// function hello(a,b){

//     if(a){
//         b();
//     }
// }

// function example5(){
//     console.log('callback')
// }

// hello(true,example5);

// function example(ex,callback){
//     let value = callback(5,5,5);
//     return ex + value;
// };

// function sum(){
//     return a+b;
// }

// let example2 = function(){
//     alert('Hello!');
// }

// console.log(example(5,sum));

// example2();

// let arrowFunc = b => console.log(b);

// arrowFunc(5);

// console.log(example2());

// let arr = [1,2,4];

// arr.map(item => console.log(item));

// newExample();

// function newExample (){
//     console.log('something');
// }

// function calfact(num){
//     if(num != 1){
//       return calfact(num-1)*num;
//     }else{
//       return 1;
//    }
// }

// var a = 'something';

// if(true){
//     let b = 10;
//     const c = 11;
// }

// function sum (a,b){
//     console.log(a+b);
// }

// sum(5,6);

// sum(1,2);

// sum(9,7);


// function oddEven(num){
//     for(let i=1; i <= num; i++){
//         if(i % 2 === 0){
//             console.log(i, 'even');
//         }else{
//             console.log(i, 'odd');
//         }
//     }
// }

// oddEven(-10);

// let arr = ['a','b','c'];

// for (let item of arr) {
//     console.log(item);
// }

// let b = true;



// function showPattern(totalRowsPatternCount) {
//     for (let curRow = 1; curRow <= totalRowsPatternCount; curRow++) {
//       // console.log(curRow);
//       let patternDesign = '';
//       for (let i = 0; i < curRow; i++) {
//         patternDesign += '*'
//       }
//       console.log(patternDesign);
//     }
//   }
  
//   showPattern(5);















// funksiya year parametri qebul edir; 
//gonderilen il nece gundurse onu qaytarir;

// funksiya 2 parameter qebul edir. 1ci parameter reqemi 2ci parameter
// quvvetini gosterir. meselen (2,2) -> 4; cunki 2 ustu 2 4 edir;

// funksiya teyin edirik. 2 parameter qebul edir. Birinci bolunen
// digeri bolen; Eger eded bolene tam bolunurse "true", bolunmurse "false"


// funksiya teyin edirik; number feet parameter qebul edir;
// funskiya daxilinde feet-i metre ceviririk ve qaytaririq;

//Arrow funksiyalarla calculatordaki esas emeliyyatlar ucun funksiyalar:
// (toplama, vurma, cixma, bolme)

// faktorial hesablayan funksiya yazin, amma, for loopu ile;

// number parameter qebul eden funskiya yaziriq. 
// verilen reqem qeder row u olan ulduzlardan ibaret shape qaytarir:
//meselen 5 verilibse:
//*
//** 
//***
//****
//*****


//====================================================


let example = 10;
let example2 = `${example} lesson`
let example3 = `sdfgsd
sdfds
sdfsd
fsdf
sdf
`
let example4 = '      baku is thE Most "beautiful" city ';

let example5 = 'somethisngs';

// let b = example5.charAt(example5.length - 1);
// let b = example5.length;
// let b = example5.endsWith('n');
// let b = example5.startsWith('o',1);
// let b = example5.indexOf('s');
// let b = example5.lastIndexOf('s');
// let b = example5.charAt(7);
// let b = example4.toLowerCase();
// let b = example4.trim();
// let b = example5.indexOf('s', 2);
//  let b = example5.slice(1,4);
//  let c = example5.substring(1,4);
//  let d = example5.substr(1,4);
// let b = example5.at(-1);

// console.log( 'I\m the Walrus!' );

// console.log(b);

//======================================

// let exampleArr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ];

// let arr = [2,3,5,7,8,1,9,0,20,4,70,6];
// let arr2 = new Array();

// arr.push('abc',20,true);
// arr.push('9999999');
// arr.unshift(10);
// arr.pop();
// arr.shift();

// function handleFilterItem(item){
//     return item < 5;
// }

// let numbersSmallerThanFive = arr.filter(handleFilterItem);

// let secondArr = [];

// function handleArrItems(item){
//     secondArr.push(item**2);
// }

// console.log(numbersSmallerThanFive);
// console.log(arr);

// arr.map(handleArrItems);

// console.log(secondArr);

// console.log(arr);

// const p330 = {
//     ages: [16,18,21,12,50]
// }

// console.log(p330.ages.filter(age => age < 18).length);

// console.log(numbersSmallerThanFive);

// function handleRegularSort(arr){
//     return arr.sort((a,b) => a -b);
// }

// function handleSorting(mehemmed,kazim){
//     return kazim-mehemmed;
// }

// console.log(arr.sort());

// let arr5 = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// let arr1 = ['a','b','c'];
// let arr2 = [4,5,6];
// let arr4 = ['hello'];

// let arr3 = [...arr1, ...arr4, ...arr2];

// arr1.map((item,index,arr) => console.log(index,item,arr));

// let newObj = {}

// newObj.name = 'Ilqar';
// newObj.surname = 'Abdulrehimov';
// newObj.hasPet = true;



// class Person {
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }
// }


// class Student extends Person {
//     constructor(name, surname,group){
//         super(name,surname);
//         this.group = group;
//     }

//      fullname(){
//         return `${this.name} ${this.surname}`
//     }
// }




// function Person(name,surname,age,isSudent,hairColor){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.isStudent = isSudent;
//     this.hairColor = hairColor;
// }

// Person.prototype.fullName = function(){
//    return `${this.name} ${this.surname}`
// }

// let b = new Person();
// console.log(String.prototype);


// let nijat = new Person('Nijat','Haydarov',18,true, 'brown');
// let kanan = new Person('Kanan', 'Alakbarov',20,true, 'black');

// let newStudent = new Student('Laman', 'Jananova','P330');


// console.log(newStudent);

// class Animal {
//     constructor(name, energy) {
//       this.name = name
//       this.energy = energy
//     }

//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     }
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     }
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }

//     static nextToEat (animals) {
//         const sortedByLeastEnergy = animals.sort((a,b) => {
//           return a.energy - b.energy
//         })
      
//         return sortedByLeastEnergy[0].name
//       }

//   }

//   const leo = new Animal('Leo', 7);
//   const snoop = new Animal('Snoop', 10);


//   console.log(leo.energy);
//   leo.eat(10);
//   console.log(leo.energy);
//   leo.play(8);
//   console.log(leo.energy);

//   console.log(Animal.nextToEat([leo,snoop]));


//   console.log(String.prototype);
//   let arr10 = [];