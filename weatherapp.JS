let kelvin= 283;
//this is the constant value of temp in kelvins
let Celsius;
Celsius= (kelvin-=273);
//to get the value of temp in celcius you need to sub 273 from kelvin
let Fahrenheit;
Fahrenheit = Celsius * (9/5) + 32;
//the formular for calculating Fahrenheit 
Fahrenheit = Math.floor(Fahrenheit);
//...
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);


let newtone;
newtone= Celsius * (33/100);
newtone=Math.floor(newtone);
console.log(`temperature in newtone is: ${newtone}`);







