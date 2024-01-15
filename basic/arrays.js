const myArr = [0, 1, 2, 3, 4, 5, 6]
//console.log("A" , myArr); 


const myn1 = myArr.slice(1, 3)
//console.log(myn1);
//console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
//console.log(myn2);
//console.log("C", myArr);


const chac = ["thor", "ironman","spiderman"]
const dc_chac = ["superman","flash","batman"]
//chac.push(dc_chac)
//console.log(chac)

//const allchac = chac.concat(dc_hero)
//console.log(allchac);



const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_Arr = anotherArr.flat(Infinity)
//console.log( real_Arr);


let score_a = 100
let score_b = 170
let score_c = 150
 console.log(Array.of(score_a, score_b, score_c));