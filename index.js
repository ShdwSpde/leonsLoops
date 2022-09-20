/*

Loops

-repeat an action some number of times
- three main types: for, while, and do while
- each offers a different way to define starts and ends of loops

*/


// for(initial expression); (condition expression);(increment expression){ do stuff}

// 21 Savage loop


function theSavage(){
  for (let i=0; i<21;i++){
    console.log('21')
    // document.querySelectoy('h2').innerText += '21'
  }
}

theSavage()

// While loop
let count = 0
while(count < 5){
  console.log(count)
  count++
}

// if we forget to increment, we would end in an infinite loop
// must make sure that ending condition can be met

function remainder(n1,n2){
  return (n1 % n2)
}

remainder(120,9)

function plusFifty(n1,n2){
  if((n1 + n2)>50){
    alert('Jumanji')
  }else {
    console.log('insufficient value')
  }
}

plusFifty(4,7)
plusFifty(37,25)

function moduloThree(x,y,z){
  let sum = x * y * z
  if ((sum % 3) === 0){
    console.log('ZEBRA')
  }
}



let weed = 420
console.log(weed)

let total = 15
alert(total += 10)

function subFour(n1,n2,n3,n4){
  alert(n1 - n2 - n3 - n4)
}

function repeatX(str,num){
  for (let i = 0; i < num; i++){
    console.log(str)
  }
}

repeatX('SAVAGE',21)

/*

Arrays

Arrays are data structures used to store ordered collections
They are numbered starting with zero. Arrays have methods to manage the order of elements. Can be created using constructors or literal notation

*/

cities = ['New York', 'London', 'Berlin', 'Paris', 'Amsterdam']

console.log(cities)

//NYC is our first element but occupies the 0th index
// We can access elements based on their array

console.log(cities[2])

// Arrays have built-in properties and methods

console.log(cities.length)

// you can insert arrays into functions

function compareArr(arr){
  if (arr[0] < arr[arr.length - 1]){
    console.log('Hi')
  } else if (arr[0] > arr[arr.length - 1]){
    console.log('bye') 
  } else {
    console.log('We close in an hour')
  }
}

compareArr([1,2,3,4,5])

// arrays can also be iterated through with a loop

bestColors = ['red', 'blue', 'black', 'purple', 'yellow', 'orange']

for (i=0; i < bestColors.length; i++){
  console.log(bestColors[i])
}

bestColors.forEach((x,i) => console.log(x))

// Methods can be used to alter and create new arrays

bestRappers = ['6ix9ine', 'Polo G', 'Lil Tjay', '6ix9ine']

//shift() will remive elements from the start of the array

let removed = bestRappers.shift()

console.log(bestRappers)

let removedAgain = bestRappers.pop()

// pop() will remove elements from the end of the array

console.log(bestRappers)

bestRappers.unshift('Dylan')

//unshift() will allow us to add elements to the start of the array

console.log(bestRappers)

let topFive = []
for (i=0; i <5; i++){
  topFive.unshift('Dylan')
}

console.log(topFive)

//map() is a loop  like for each that creates a new array

let bestRappers2020 = [ 'Dylan', 'Polo G', 'Dylan']

let bestRappersAlive = bestRappers2020.map(x => 'Dylan')

console.log(bestRappersAlive)

bestRappersAlive.unshift('Dylan')

bestRappersAlive.push('Dylan')

console.log(bestRappersAlive)

//notice how we used the push to add onto the end of the array

function arrayEvens(arr){
  let newArray = []
  arr.forEach(num => {
    if (num % 2 === 0){
    newArray.push(num)
    } 
  })
  console.log(newArray)
}

arrayEvens([7,8,9,10,11,12])

// that was practice but the filter property may work better in that case

function tryThis(arr){
  console.log(arr.filter(num => num % 2 === 0))
}

tryThis([1,2,3,4,5,6,7,8,9])

/*

OBJECTS

Objects are a collection of variables and functions

They represent the attributes and behavior of something used in the program

Object variables are called properties and object functions are called methods

Objects store key collections

*/

let stopwatch = {
  color:'black',
  brand:'accusplit',
  shape:'round',
  size:60,
  model:'pro survivor'
}

console.log(stopwatch)
//Here we add a property and a method using dot notation

stopwatch.currentTime = 12
stopwatch.tellTime = function(time){
  console.log(`The current time is ${time} o'clock.`)
}

stopwatch.alarm = function(num){
 for(i=0; i < num; i++){
   console.log('beep, beep, beep')
 }
}

stopwatch.start = function(){
  console.log('RUNNNNNN')
}

stopwatch.stop = function(){
  console.log('STAHHPPPPP')
}
  
stopwatch.alarm(6)
stopwatch.start()
stopwatch.stop()
// the log here shows that we successfully used our dot notation

console.log(stopwatch)
console.log(stopwatch.tellTime(stopwatch.currentTime))


// you can create multiple obejects at once using a constructor

function makeCar(carModel,carMake,carColor,carNumOfDoors,isElectric){
this.make = carMake
this.model = carModel
this.color = carColor
this.doors = carNumOfDoors
this.electric = isElectric
this.honk = function(){
  console.log('beep, beep, FUCKER!!')
  }
this.secure = function(){
  console.log(`Locked ${this.doors} doors!`)
  }
}

let hondaCivic = new makeCar('Civic','Honda','grey',4,false)

let teslaRoadster = new makeCar('Roadster', 'Tesla','black',2,true)

console.log(hondaCivic)
console.log(teslaRoadster)

// its 2022, cars gotta have bluetooth

makeCar.prototype.bluetooth = true
console.log(hondaCivic.bluetooth)

// We can give the object protoype a property and we can also inherit from the global object prototype

console.log(hondaCivic.bluetooth.toString())


function fightNight(fighterName,fighterWeight,fighterReach,madeWeight,isChampion){
  this.fighter = fighterName
  this.weight = fighterWeight
  this.reach = fighterReach
  this.weighIn = madeWeight
  this.champion = isChampion
  this.fight = function(num){
    for(i = 0;i < num; i++){
    console.log('jab, jab, hook')
    }
  }
  this.playDirty = function(){
    console.log('Take this to the gonads CHUMP!')
  }
}

const Apollo = new fightNight('Apollo Creed', 220, 74, true, false)

const Rocky = new fightNight('Rocky Balboa', 218, 69, true, true)

console.log(Rocky)

console.log(Apollo)

// we can add methods or properties to a constructor using the prototype object and inheritance

fightNight.prototype.knockout = function(){
  console.log('You just got KNOCKED TF OUT!!!')
}

fightNight.prototype.specialMove = ''
Apollo.specialMove = 'Tiger Claw'
Apollo.taunt = function(){
  console.log(`You can't handle my ${this.specialMove}`)
}

// you can still apply properties and methods to individual objects made with constructors using the dot notation

Apollo.fight(3)
Rocky.playDirty()
Apollo.taunt()
Apollo.knockout()

let Drago = new fightNight('Ivan Drago',240,76,false,false)

Drago.useSteroids = true

console.log(Drago)

// could make a game with health, speed, attack, defense similarly