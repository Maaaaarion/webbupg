/* Maryan Malanchuk 17TEK-CS */

document.writeln("Maryan Malanchuk 17TEK-CS");

/** Uppgift 1**/
window.alert("Det här är en omvandlare från meter till yards");
    let meter = prompt("Skriv in hur många meter du vill omvandla");
    let tal = 0.9144;
    let sum = meter * tal;
    let yards = Math.round(sum);
if (isNaN(meter)) {
  alert("Du kan endast skriva ciffror här");
} else {
  alert(meter + " meter är ungäfer " + yards + " yards ");
}
/*============*/



/** Uppgift 2**/
  let totalSum = 0;
  let x1 = Math.floor((Math.random(totalSum) * 6) + 1);
  let x2 = Math.floor((Math.random(totalSum) * 6) + 1);
  let x3 = Math.floor((Math.random(totalSum) * 6) + 1);
  let x4 = Math.floor((Math.random(totalSum) * 6) + 1);
  let x5 = Math.floor((Math.random(totalSum) * 6) + 1);
  let x6 = Math.floor((Math.random(totalSum) * 6) + 1);
console.log(x1);
console.log(x2);
console.log(x3);
console.log(x4);
console.log(x5);
console.log(x6);
  let sumup2 = (x1 + x2 + x3 + x4 + x5 + x6);
console.log(sumup2);
/*============*/


/** Uppgift 3**/
//Skapar variblerna dice1,dice2 och dice3 som sedan får ett slump tal mellan 1 och 6
let t1 = Math.floor(Math.random()*6) +1;
//skriver ut den tal tärningarna fick.
document.write("<br>" + "<br>" + "Första tärning:" + t1 + "<br>" + "<br>");
let t2 = Math.floor(Math.random()*6) +1;
document.write("Andra tärning:" + t2 + "<br>" + "<br>");
let t3 = Math.floor(Math.random()*6) +1;
document.write("Tredje tärning:" + t3 + "<br>" + "<br>");
// IF och ELSE
if (t1 == t2 == t3)
      {
        document.write("Alla tärningar är lika" + "<br>" + "<br>");
      }

else if (t1 == t2 || t1 == t3  || t2 == t3 )
      {
        document.write("Två av tärningar är lika" + "<br>" + "<br>");
      }
else
    {
        document.write("Inga av tärningar är lika" + "<br>" + "<br>");
    }
/*============*/
