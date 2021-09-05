var arrayNames =["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];
console.log(arrayNames);

for (let i = 0; i < arrayNames.length; i++) {
    if((arrayNames[i].charAt(0)== 'j') || (arrayNames[i].charAt(0)== 'J'))
  {
    console.log("goodbye"+ " " + arrayNames[i]);
   }
else 
console.log("hello"+" "+arrayNames[i]); 

}