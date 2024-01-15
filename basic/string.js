//const name = "world"
//const repoCount = "codegreeneye"
// console.log(`hello ${name} ,I'm ${repoCount}`);
 

const gameName = new String(`hello world`)
console.log(gameName[0]);     
console.log(gameName.__proto__);
console.log(gameName.length); 
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(3)); 
console.log(gameName.indexOf('e')); 

const newString = gameName.substring(0, 4)
console.log(newString);

const oldString = gameName.slice(-8, 4)
console.log(oldString);