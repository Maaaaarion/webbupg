/*UPGIFT 1*/
console.log(5 * 2 <= 12 ); //TRUE
console.log(55 > 22 ); //TRUE
console.log(16 / 4 == 4 ); //TRUE
console.log(8 + 2 < 128 ); //TRUE
console.log(32 * 8 != 255 ); //TRUE
  /*UPGIFT 1*/
///////////////////////////////////////////////
  /*UPGIFT 2*/
  let dagy = "Tisdag";
  let dag2 = dagy.substring(0,3);
  console.log(dag2);
///////////////////////////////////////////////
  let burgare = "Hamburgare";
  let burgare2 = burgare.substring(3,10);
  console.log(burgare2);
///////////////////////////////////////////////
  let back = "I´ll be back";
  let back2 = back.substring(5,12);
  console.log(back2);
  /*UPGIFT 2*/
///////////////////////////////////////////////
  /*UPGIFT 3*/
  let text = "It´s Learning"; //LEARING
  let text1 = text.substring(5);
  text1 = text1.toUpperCase();
  console.log(text1);
  /*UPGIFT 3*/
///////////////////////////////////////////////
  /*UPGIFT 4*/
  let numbers = [128, 256, 512, 1024, 2048];
  let sumOfNumbers = 0;
  for (var i = 0; i < numbers.length; i++) {
    sumOfNumbers+=numbers[i]
  }
  console.log(sumOfNumbers);
  console.log(sumOfNumbers/numbers.length);
  /*UPGIFT 4*/
///////////////////////////////////////////////
